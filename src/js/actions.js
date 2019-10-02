export const ADD_SKILL = '@@myapp/ADD_SKILL';
export const addSkill = text => ({ type: ADD_SKILL, text });

export const TOGGLE_PAGE = '@@myapp/TOGGLE_PAGE';
export const togglePage = page => ({ type: TOGGLE_PAGE, page });

export const UPDATE_NEWS = '@@myapp/UPDATE_NEWS';
export const updateNews = news => ({ type: UPDATE_NEWS, news });

export const CHANGE_TEXT = '@@myapp/CHANGE_TEXT';
export const changeText = text => ({ type: CHANGE_TEXT, text });
