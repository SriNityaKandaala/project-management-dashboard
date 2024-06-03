// tests/Project/ProjectForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProjectForm from '../../src/components/Project/ProjectForm';

test('renders project form', () => {
  const { getByPlaceholderText, getByText } = render(<ProjectForm />);
  const nameInput = getByPlaceholderText('Project Name');
  const descriptionInput = getByPlaceholderText('Project Description');
  const submitButton = getByText('Add Project');

  expect(nameInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('submits project form with valid data', () => {
  const mockAddProject = jest.fn();
  const { getByPlaceholderText, getByText } = render(<ProjectForm addProject={mockAddProject} />);
  const nameInput = getByPlaceholderText('Project Name');
  const descriptionInput = getByPlaceholderText('Project Description');
  const submitButton = getByText('Add Project');

  fireEvent.change(nameInput, { target: { value: 'Project 1' } });
  fireEvent.change(descriptionInput, { target: { value: 'Description 1' } });
  fireEvent.click(submitButton);

  expect(mockAddProject).toHaveBeenCalledWith({ name: 'Project 1', description: 'Description 1' });
});
