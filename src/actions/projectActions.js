// src/actions/projectActions.js
import axios from 'axios';

export const fetchProjects = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/projects');
    dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PROJECTS_FAILURE', error });
  }
};

export const addProject = (project) => async (dispatch) => {
  try {
    const response = await axios.post('/api/projects', project);
    dispatch({ type: 'ADD_PROJECT_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_PROJECT_FAILURE', error });
  }
};
