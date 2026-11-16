// Internal planning list, imported only in development. No unverified portraits.
export const proposedMinisters = ['Greatman Takit', 'Lekan Remilekun Amos', 'Favour Ojo', 'Harjovy', 'Solomon Mayowa', 'Hattylola', 'Tosin Bee', 'Minister Mike'].map(name => ({
  id: name.toLowerCase().replaceAll(' ', '-'),
  name,
  status: 'proposed',
  publicationApproved: false,
  image: null
}));
