import React from 'react';
import ContactForm from './ContactForm';
import MapComponent from './MapComponent';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-secondary overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            İletişime Geçin
          </h2>
          <p className="text-base md:text-lg text-text-default max-w-3xl mx-auto leading-relaxed">
            Projeleriniz için profesyonel çözümler sunuyoruz. Bizimle iletişime geçin, 
            size en uygun teklifi hazırlayalım.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-6 flex items-center">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Şirket Bilgileri
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-default text-sm lg:text-base">Adres</h4>
                    <p className="text-text-default mt-1 text-sm lg:text-base">
                      İstanbul merkezli<br />
                      Türkiye genelinde hizmet
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-default text-sm lg:text-base">Telefon</h4>
                    <a href="tel:+905524251381" className="text-accent hover:text-accent/80 transition-colors text-sm lg:text-base">
                      +90 (552) 425 13 81
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-default text-sm lg:text-base">E-posta</h4>
                    <a href="mailto:info@vizyonexyapi.com" className="text-accent hover:text-accent/80 transition-colors text-sm lg:text-base break-all">
                      info@vizyonexyapi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-default text-sm lg:text-base">Web Sitesi</h4>
                    <a href="https://www.vizyonex.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors text-sm lg:text-base break-all">
                      www.vizyonexyapi.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-6 flex items-center">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Çalışma Saatleri
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-text-default text-sm lg:text-base">Pazartesi - Cuma</span>
                  <span className="text-accent font-semibold text-sm lg:text-base">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-text-default text-sm lg:text-base">Cumartesi</span>
                  <span className="text-accent font-semibold text-sm lg:text-base">09:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-text-default text-sm lg:text-base">Pazar</span>
                  <span className="text-gray-500 text-sm lg:text-base">Kapalı</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-xs lg:text-sm text-text-default">
                  <strong>Acil Durumlar:</strong> 7/24 teknik destek hattımız mevcuttur.
                  Acil durumlar için: 
                  <a href="tel:+905321234567" className="text-accent font-semibold ml-1 break-all">
                    +90 (532) 123 45 67
                  </a>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-6 flex items-center">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Sosyal Medya
              </h3>
              
              <div className="flex space-x-3 lg:space-x-4">
                <a
                  href="https://linkedin.com/company/vizyonex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#0077b5] text-white rounded-lg hover:bg-[#005885] transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a
                  href="https://instagram.com/vizyonex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.99.013 6.77.072 5.55.132 4.806.333 4.17.63c-.677.32-1.25.748-1.82 1.32-.572.571-1.001 1.144-1.32 1.821-.298.636-.499 1.38-.559 2.6C.013 7.99 0 8.396 0 12.017c0 3.624.013 4.09.072 5.311.06 1.22.26 1.964.558 2.6.319.677.748 1.25 1.32 1.82.571.572 1.144 1.001 1.821 1.32.636.298 1.38.499 2.6.559 1.22.059 1.626.072 5.311.072 3.624 0 4.09-.013 5.311-.072 1.22-.06 1.964-.26 2.6-.558.677-.319 1.25-.748 1.82-1.32.572-.571 1.001-1.144 1.32-1.821.298-.636.499-1.38.559-2.6.059-1.22.072-1.626.072-5.311 0-3.624-.013-4.09-.072-5.311-.06-1.22-.26-1.964-.558-2.6-.319-.677-.748-1.25-1.32-1.82C18.566.881 17.993.452 17.316.134c-.636-.298-1.38-.499-2.6-.559C13.496.013 13.09 0 12.017 0zm0 2.16c3.554 0 3.97.014 5.378.072 1.297.059 2.003.275 2.473.456.621.242 1.064.532 1.532 1 .468.468.758.911 1 1.532.181.47.397 1.176.456 2.473.058 1.408.072 1.824.072 5.378 0 3.554-.014 3.97-.072 5.378-.059 1.297-.275 2.003-.456 2.473-.242.621-.532 1.064-1 1.532-.468.468-.911.758-1.532 1-.47.181-1.176.397-2.473.456-1.408.058-1.824.072-5.378.072-3.554 0-3.97-.014-5.378-.072-1.297-.059-2.003-.275-2.473-.456-.621-.242-1.064-.532-1.532-1-.468-.468-.758-.911-1-1.532-.181-.47-.397-1.176-.456-2.473-.058-1.408-.072-1.824-.072-5.378 0-3.554.014-3.97.072-5.378.059-1.297.275-2.003.456-2.473.242-.621.532-1.064 1-1.532.468-.468.911-.758 1.532-1 .47-.181 1.176-.397 2.473-.456 1.408-.058 1.824-.072 5.378-.072z"/>
                    <path d="M12.017 5.838c-3.403 0-6.158 2.758-6.158 6.159 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.159-6.158-6.159zm0 10.155c-2.209 0-3.997-1.789-3.997-3.996s1.788-3.996 3.997-3.996S16.014 9.788 16.014 12s-1.788 3.996-3.997 3.996zM19.846 5.595c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>

                <a
                  href="https://wa.me/+902244441234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#25d366] text-white rounded-lg hover:bg-[#1da851] transition-colors"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-primary mb-6">
              Hızlı İletişim Formu
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* Map or Additional Info Section */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-primary mb-6 text-center">
              Faaliyet Alanımız
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h4 className="text-lg lg:text-xl font-semibold text-text-default mb-4">
                  İstanbul Merkezli Hizmet
                </h4>
                <p className="text-text-default leading-relaxed mb-4 text-sm lg:text-base">
                  İstanbul merkezli olarak, endüstriyel çelik konstrüksiyon ve mimari çelik 
                  projelerinde uzman ekibimizle Türkiye genelinde hizmet vermekteyiz. İstanbul&apos;daki 
                  stratejik konumumuz, proje koordinasyonu ve müşteri erişimi açısından büyük avantajlar sağlamaktadır.
                </p>
                <div className="flex items-start text-xs lg:text-sm text-text-default">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-accent mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    İstanbul&apos;dan Türkiye genelinde hizmet veriyoruz. 
                    Projeleriniz için sizinle buluşmaya hazırız.
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 lg:p-8 text-center">
                {/* OpenStreetMap integration */}
                <MapComponent />
                <a
                  href="https://maps.google.com/?q=İstanbul,+Türkiye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-4 lg:px-6 py-2 bg-accent text-text-light rounded-lg hover:bg-accent/90 transition-colors text-sm lg:text-base"
                >
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Haritada Görüntüle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}