import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './navbar';

test('renders navbar', () => {
  render(<Navbar/>);
  const linkElement = screen.getByText(/This is my map App/i);
  expect(linkElement).toBeInTheDocument();
});