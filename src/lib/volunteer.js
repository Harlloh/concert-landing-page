export const emptyVolunteerInterest = {
  name: '',
  email: '',
  phone: '',
  availability: '',
  interest: ''
};

export async function submitVolunteerInterest(endpoint, data, {
  signal,
  fetcher = fetch
} = {}) {
  const payload = Object.fromEntries(
    Object.keys(emptyVolunteerInterest).map(key => [key, String(data[key] || '').trim()])
  );
  const response = await fetcher(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(payload),
    signal
  });
  const result = await response.json();
  if (!response.ok || result?.success === false || String(result?.status || '').toUpperCase() !== 'SUCCESS') {
    throw new Error('Volunteer interest was not confirmed');
  }
  return true;
}
