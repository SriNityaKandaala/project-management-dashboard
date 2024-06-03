// tests/Project/ProjectList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ProjectList from '../../src/components/Project/ProjectList';

test('renders project list with projects', () => {
  const projects = [
    { id: 1, name: 'Project 1', description: 'Description 1' },
    { id: 2, name: 'Project 2', description: 'Description 2' },
  ];

  const { getByText } = render(<ProjectList projects={projects} />);

  expect(getByText('Project 1')).toBeInTheDocument();
  expect(getByText('Project 2')).toBeInTheDocument();
});
