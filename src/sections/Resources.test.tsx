import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Resources from './Resources';

test('renders Resources title', () => {
  render(<Resources />);
  expect(screen.getByText('Resources')).toBeInTheDocument();
});

test('renders MDN Web Docs', () => {
  render(<Resources />);
  expect(screen.getByText('MDN Web Docs')).toBeInTheDocument();
});

test('renders React Documentation', () => {
  render(<Resources />);
  expect(screen.getByText('React Documentation')).toBeInTheDocument();
});