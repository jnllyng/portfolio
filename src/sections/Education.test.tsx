import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from './Education';

test('renders Education title', () => {
  render(<Education />);
  expect(screen.getByText('Education')).toBeInTheDocument();
});

test('renders Red River College', () => {
  render(<Education />);
  expect(screen.getByText('Red River College Polytech')).toBeInTheDocument();
});

test('renders Wuhan University', () => {
  render(<Education />);
  expect(screen.getByText('Wuhan University')).toBeInTheDocument();
});