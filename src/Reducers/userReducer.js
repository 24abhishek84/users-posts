export const initialState = {
    mainUserList: [],
    userList: [],
    currentRecord: null,
    userPosts: [],
    searchText: ''
};

const common = (state = initialState, action = {}) => {
  const {mainUserList, searchText} = state;
  switch (action.type) {
    case 'SAVE_USER_LIST':
      return {...state, mainUserList: [...action.payload], userList: [...action.payload]};
    case 'FILTER_USER_LIST':
      console.log('action.payload', action.payload);
      console.log('searchText', state.searchText);
      const search = action.payload ? action.payload.toLowerCase() : searchText;
      const filteredUserList = search ? mainUserList.filter(x => x.name.toLowerCase().includes(search)) : [...mainUserList];
      return {...state, userList: [...filteredUserList], searchText: action.payload};
    case 'SET_CURRENT_RECORD':
      console.log('action.payload', action.payload);
      return {...state, currentRecord: action.payload?.id};
    case 'SAVE_USER_POSTS':
      return {...state, userPosts: [...action.payload]};
      default: return state;
  }
};

export default common;