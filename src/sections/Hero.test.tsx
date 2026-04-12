import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders name', () => {
  render(<Hero />);
  expect(screen.getByText(/jueun/i)).toBeInTheDocument();
});

test('renders role tag', () => {
  render(<Hero />);
  expect(screen.getByText('Full Stack Web Developer')).toBeInTheDocument();
});

test('renders get in touch button', () => {
  render(<Hero />);
  expect(screen.getByText('Get in touch')).toBeInTheDocument();
});