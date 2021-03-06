export const fetchQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const [quote] = await res.json();
  return {
    image: quote.image,
    quote: quote.quote,
    character: quote.character
  };
};
