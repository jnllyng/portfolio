import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import DevSetup from './DevSetup';

test('renders Developer Setup title', () => {
  render(<DevSetup />);
  expect(screen.getByText('Developer Setup')).toBeInTheDocument();
});

test('renders VS Code Setup tab', () => {
  render(<DevSetup />);
  expect(screen.getAllByText('VS Code Setup').length).toBeGreaterThan(0);
});

test('renders Terminal Setup tab', () => {
  render(<DevSetup />);
  expect(screen.getByText('Terminal Setup')).toBeInTheDocument();
});