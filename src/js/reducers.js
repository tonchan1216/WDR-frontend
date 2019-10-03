import { ADD_SKILL, TOGGLE_PAGE, UPDATE_NEWS, CHANGE_TEXT } from './actions';

const initialState = {
  news: '',
  inputText: '',
  page: 'front',
  skill: {
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
  }
};

export default (state = initialState, action) => {
  const invert = state.page === 'front' ? 'back' : 'front';

  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, inputText: action.text };
    case UPDATE_NEWS:
      return { ...state, news: action.news };
    case ADD_SKILL:
      return {
        ...state,
        inputText: '',
        skill: {
          [state.page]: state.skill[state.page].concat(action.text),
          [invert]: state.skill[invert]
        }
      };
    case TOGGLE_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};
