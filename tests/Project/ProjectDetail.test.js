// tests/Project/ProjectDetail.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectDetail from '../../src/components/Project/ProjectDetail';

test('renders project detail', () => {
  const project = { id: 1, name: 'Project 1', description: 'Description 1' };

  const { getByText } = render(
    <MemoryRouter>
      <ProjectDetail project={project} />
    </MemoryRouter>
  );

  expect(getByText('Project 1')).toBeInTheDocument();
  expect(getByText('Description 1')).toBeInTheDocument();
});
