import React, { useState } from 'react';
import { fetchQuote } from '../services/SimpsonsAPI';
import Load from '../components/app/quote/Load';
import Quote from '../components/app/quote/Quote';

const SimposnsQuote = () => {
  const [quote, setQuoteState] = useState(null);
  const [loading, setLoadingState] = useState(false);

  const handleClick = async () => {
    setLoadingState(true);
    const quote = await fetchQuote();
    setQuoteState(quote);
    setLoadingState(false);
  };
  return (
    <>
      <Load onClick={handleClick} />
      {loading ? <img id="spinner" src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="spin" /> : (quote && <Quote quote={quote.quote} character={quote.character} image={quote.image} />)}
    </>
  );
};

export default SimposnsQuote;
