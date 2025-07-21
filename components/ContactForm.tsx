'use client';

import React, { useState } from 'react';
import { validateContactForm, sanitizeFormData, type FormData, type ValidationError } from '../lib/formValidation';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setValidationErrors([]);

    // Client-side validation
    const errors = validateContactForm(formData);
    if (errors.length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      
      if (!formspreeEndpoint) {
        console.error('Formspree endpoint not configured');
        setSubmitStatus('error');
        return;
      }

      // Sanitize form data before sending
      const sanitizedData = sanitizeFormData(formData);

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: sanitizedData.name,
          email: sanitizedData.email,
          subject: sanitizedData.subject,
          message: sanitizedData.message,
          _replyto: sanitizedData.email, // Formspree field for reply-to
          _subject: `Vizyonex İletişim: ${sanitizedData.subject}`, // Custom subject
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setValidationErrors([]);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Form submission failed:', response.statusText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to get field error
  const getFieldError = (fieldName: string): string | undefined => {
    const error = validationErrors.find(err => err.field === fieldName);
    return error?.message;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-text-default mb-2">
              Ad Soyad *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 ${
                getFieldError('name') ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Adınız ve soyadınız"
            />
            {getFieldError('name') && (
              <p className="mt-1 text-sm text-red-600">{getFieldError('name')}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-text-default mb-2">
              E-posta Adresi *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 ${
                getFieldError('email') ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="ornek@email.com"
            />
            {getFieldError('email') && (
              <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-text-default mb-2">
            Konu *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 ${
              getFieldError('subject') ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          >
            <option value="">Konu seçiniz</option>
            <option value="genel-bilgi">Genel Bilgi</option>
            <option value="proje-teklifi">Proje Teklifi</option>
            <option value="endustriyel-tesisler">Endüstriyel Tesisler</option>
            <option value="ticari-yapilar">Ticari Yapılar</option>
            <option value="mimari-celik">Mimari Çelik</option>
            <option value="teknik-destek">Teknik Destek</option>
            <option value="ortaklik">İş Ortaklığı</option>
          </select>
          {getFieldError('subject') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('subject')}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-text-default mb-2">
            Mesajınız *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-vertical ${
              getFieldError('message') ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Projeniz hakkında detaylı bilgi veriniz..."
          ></textarea>
          {getFieldError('message') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('message')}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-8 py-4 font-semibold text-lg rounded-lg transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'bg-accent hover:bg-accent/90 text-text-light transform hover:scale-105'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Gönderiliyor...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Mesaj Gönder
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p className="font-semibold">Mesajınız başarıyla gönderildi!</p>
              <p className="text-sm">En kısa sürede size dönüş yapacağız.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">Mesaj gönderilemedi!</p>
              <p className="text-sm">Lütfen tekrar deneyiniz veya doğrudan iletişim bilgilerimizi kullanınız.</p>
            </div>
          )}

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500 text-center mt-4 max-w-md">
            Gönderdiğiniz kişisel veriler, KVKK kapsamında güvenli bir şekilde işlenmekte ve sadece 
            size dönüş yapmak amacıyla kullanılmaktadır.
          </p>
        </div>
      </form>
    </div>
  );
}