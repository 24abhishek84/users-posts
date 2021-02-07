import { SAVE_USER_LIST, FILTER_USER_LIST, SET_CURRENT_RECORD, SAVE_USER_POSTS } from './types';

export const saveUserList = userList => (dispatch) => {
  dispatch({
      type: SAVE_USER_LIST,
      payload: [...userList]
  })
};

export const filterUserList = searchText => (dispatch) => {
  dispatch({
    type: FILTER_USER_LIST,
    payload: searchText
  })
};

export const setCurrentRecord = record => (dispatch) => {
  console.log('setCurrentRecord', record);
  dispatch({
    type: SET_CURRENT_RECORD,
    payload: {...record}
  })
};

export const saveUserPosts = userPosts => (dispatch) => {
  dispatch({
    type: SAVE_USER_POSTS,
    payload: [...userPosts]
  })
}