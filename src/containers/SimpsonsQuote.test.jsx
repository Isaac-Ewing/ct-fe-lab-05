import React from 'react';
import { waitFor, fireEvent, render, screen } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://thesimpsonsquoteapi.glitch.me/quotes',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            character: 'Milhouse Van Houten',
            quote: 'Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl? - Milhouse Van Houten',
            image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002',
          },
        ])
      );
    }
  )
);
  
describe('FuturamaQuote Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetch quote button', async () => {
    render(<SimpsonsQuote />);
  
    const fetchButton = screen.getByRole('button', { name: 'Get a Simpsons quote' });
    fireEvent.click(fetchButton);
    // userEvent.click(fetchButton)
  
    return waitFor(() => {
      screen.getByText('Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl? - Milhouse Van Houten');
    });
  });
});
