export const ADD_SKILL = '@@myapp/ADD_SKILL';
export const addSkill = text => ({ type: ADD_SKILL, text });

export const TOGGLE_PAGE = '@@myapp/TOGGLE_PAGE';
export const togglePage = status => ({ type: TOGGLE_PAGE, status });
