export interface ValidationError {
  field: string;
  message: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const validateContactForm = (data: FormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name.trim()) {
    errors.push({ field: 'name', message: 'Ad soyad gereklidir' });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Ad soyad en az 2 karakter olmalıdır' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.push({ field: 'email', message: 'E-posta adresi gereklidir' });
  } else if (!emailRegex.test(data.email)) {
    errors.push({ field: 'email', message: 'Geçerli bir e-posta adresi giriniz' });
  }

  // Subject validation
  if (!data.subject) {
    errors.push({ field: 'subject', message: 'Konu seçimi gereklidir' });
  }

  // Message validation
  if (!data.message.trim()) {
    errors.push({ field: 'message', message: 'Mesaj gereklidir' });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Mesaj en az 10 karakter olmalıdır' });
  }

  return errors;
};

export const sanitizeFormData = (data: FormData): FormData => {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    subject: data.subject,
    message: data.message.trim()
  };
};