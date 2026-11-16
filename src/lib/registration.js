export const emptyRegistration = {
  name: '',
  email: '',
  invitee: '',
  location: '',
  whatsappNumber: '',
  message: ''
};
export function validateRegistration(data) {
  const errors = {};
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  for (const key of Object.keys(emptyRegistration)) if (!String(data[key] || '').trim()) errors[key] = 'Please complete this field.';
  if (data.email && !email.test(data.email.trim())) errors.email = 'Enter a valid email address.';
  if (data.invitee && data.invitee.split(',').some(value => !email.test(value.trim()))) errors.invitee = 'Separate valid email addresses with commas.';
  if (data.whatsappNumber && data.whatsappNumber.split(',').some(value => !/^\+?[\d\s().-]{7,25}$/.test(value.trim()) || value.replace(/\D/g, '').length < 7)) errors.whatsappNumber = 'Include a valid phone number and country code. Separate numbers with commas.';
  return errors;
}
export async function registerAttendee(endpoint, data, {
  signal,
  fetcher = fetch
} = {}) {
  const payload = Object.fromEntries(Object.keys(emptyRegistration).map(key => [key, data[key].trim()]));
  const response = await fetcher(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(payload),
    signal
  });
  const result = await response.json();
  const status = String(result?.status ?? '').trim();
  if (!response.ok || result?.success === false || /error|fail|invalid|unsuccessful|not (?:sent|registered|successful)/i.test(status)) throw new Error('Registration not confirmed');
  return result?.success === true || /^(?:success\b|successful(?:ly)?\b|registered\b|registration (?:was )?(?:successful|completed)\b|sent\b|submitted\b)/i.test(status);
}
