const randomQoutes = require('../randomQuotes.json');

export const quoteRandomizer = () => {
  const rand = Math.floor(Math.random() * randomQoutes['quotes'].length);
  return randomQoutes['quotes'][rand];
};
quoteRandomizer();
