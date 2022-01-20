import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GreenPass screen', () => {
  render(<App />);
  const testo = screen.getByText(/Valida GreenPass/i);
  expect(testo).toBeInTheDocument();
});
