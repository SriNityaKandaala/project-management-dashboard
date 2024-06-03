// src/components/Dashboard/Dashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../actions/projectActions';
import ProjectList from './ProjectList';

const Dashboard = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Dashboard;
