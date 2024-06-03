// src/components/Project/ProjectForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../../actions/projectActions';

const ProjectForm = () => {
  const [project, setProject] = useState({ name: '', description: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(project));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Project Name" onChange={handleChange} />
      <textarea name="description" placeholder="Project Description" onChange={handleChange} />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
