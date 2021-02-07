const initialState = {
    mainUserList: [],
    userList: [],
    currentRecord: null,
    userPosts: []
};

const common = (state = initialState, action = {}) => {
  const {mainUserList} = state;
  switch (action.type) {
    case 'SAVE_USER_LIST':
      return {...state, mainUserList: [...action.payload], userList: [...action.payload]};
    case 'FILTER_USER_LIST':
      const filteredUserList = mainUserList.filter(x => x.name.toLowerCase().includes(action.payload.toLowerCase()));
      return {...state, userList: [...filteredUserList]};
    case 'SET_CURRENT_RECORD':
      console.log('action.payload', action.payload);
      return {...state, currentRecord: action.payload?.id};
    case 'SAVE_USER_POSTS':
      return {...state, userPosts: [...action.payload]};
      default: return state;
  }
};

export default common;