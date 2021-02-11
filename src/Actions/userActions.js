import { SAVE_USER_LIST, FILTER_USER_LIST, SET_CURRENT_RECORD, SAVE_USER_POSTS } from './types';

export const saveUserList = userList => {
  debugger;
  return ({
      type: SAVE_USER_LIST,
      payload: [...userList]
  })
};

export const filterUserList = searchText => {
  return ({
    type: FILTER_USER_LIST,
    payload: searchText
  })
};

export const setCurrentRecord = record => {
  return ({
    type: SET_CURRENT_RECORD,
    payload: {...record}
  })
};

export const saveUserPosts = userPosts => {
  return ({
    type: SAVE_USER_POSTS,
    payload: [...userPosts]
  })
};

