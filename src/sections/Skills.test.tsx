import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('renders Skills title', () => {
  render(<Skills />);
  expect(screen.getByText('Skills')).toBeInTheDocument();
});

test('renders JavaScript skill', () => {
  render(<Skills />);
  expect(screen.getByText('JavaScript')).toBeInTheDocument();
});

test('renders React skill', () => {
  render(<Skills />);
  expect(screen.getByText('React')).toBeInTheDocument();
});