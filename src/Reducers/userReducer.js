export const initialState = {
    mainUserList: [],
    userList: [],
    currentRecord: null,
    userPosts: [],
    searchText: ''
};

const common = (state = initialState, action = {}) => {
  const {mainUserList} = state;
  switch (action.type) {
    case 'SAVE_USER_LIST':
      return {...state, mainUserList: [...action.payload], userList: [...action.payload]};
    case 'FILTER_USER_LIST':
      const filteredUserList = action.payload ? mainUserList.filter(x => x.name.toLowerCase().includes(action.payload.toLowerCase())) : [...mainUserList];
      return {...state, userList: [...filteredUserList], searchText: action.payload};
    case 'SET_CURRENT_RECORD':
      return {...state, currentRecord: action.payload?.id};
    case 'SAVE_USER_POSTS':
      return {...state, userPosts: [...action.payload]};
      default: return state;
  }
};

export default common;