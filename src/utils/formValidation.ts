const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isFilled = (value: string) => value.trim() !== '';

export const isValidEmail = (value: string) => EMAIL_PATTERN.test(value.trim());

/** Accepts any formatting, e.g. "(555) 234-8790" or "+1 555.234.8790", as long as it has 10–15 digits. */
export const isValidPhone = (value: string) => {
  const digitCount = value.replace(/\D/g, '').length;
  return digitCount >= 10 && digitCount <= 15;
};
