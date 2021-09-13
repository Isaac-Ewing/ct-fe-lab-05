import React from 'react';
import { render, screen } from '@testing-library/react';
import SimposnsQuote from './SimpsonsQuote';

describe('Simpsons container test', () => {
    it('displays a button', async() => {
        render(<SimposnsQuote />);

        const findButton = screen.getByRole('button', { name: 'get quote'});
    })
})