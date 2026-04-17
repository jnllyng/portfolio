import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Work from './Work';

test('renders Projects title', () => {
  render(<Work />);
  expect(screen.getByText('Projects')).toBeInTheDocument();
});

test('renders InnovAsia project', () => {
  render(<Work />);
  expect(screen.getByText('InnovAsia — AI Tutorial')).toBeInTheDocument();
});

test('renders Manitoba Nature Archive project', () => {
  render(<Work />);
  expect(screen.getByText('Manitoba Nature Archive')).toBeInTheDocument();
});