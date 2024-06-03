// src/reducers/projectReducer.js
const initialState = {
    projects: [],
    error: null,
  };
  
  const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PROJECTS_SUCCESS':
        return { ...state, projects: action.payload, error: null };
      case 'ADD_PROJECT_SUCCESS':
        return { ...state, projects: [...state.projects, action.payload], error: null };
      case 'FETCH_PROJECTS_FAILURE':
      case 'ADD_PROJECT_FAILURE':
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  
  export default projectReducer;
  