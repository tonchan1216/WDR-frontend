import { ADD_SKILL, TOGGLE_PAGE } from './actions';

const initialState = {
  // news: '',
  // inputText: '',
  status: 'front',
  // skill: {
  front: [
    'HTML',
    'CSS',
    'Basic of JavaScript',
    'Package Managers',
    'CSS Pre-proccessors',
    'CSS Frameworks',
    'CSS Architecture',
    'Build Tootls',
    'Pick a Framework',
    'CSS in JS',
    'Testing your Apps',
    'Progressive Web Apps',
    'Type Checkers',
    'Server Side Rendering',
    'Static Site Generators',
    'Desktop Applications',
    'Mobile Applications',
    'Web Assembly'
  ],
  back: []
  // }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SKILL:
      return { ...state, front: state.front.concat(action.text) };
    case TOGGLE_PAGE:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
