// tests/Dashboard/Dashboard.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../src/components/Dashboard/Dashboard';

test('renders dashboard', () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText('Dashboard')).toBeInTheDocument();
});
