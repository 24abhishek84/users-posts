import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../Actions/userActions';
import * as types from '../../Actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const record = {
  id: 2,
  name: 'Sam Dun',
  email: 'sam@ddun.com',
  company: 'Sam Company'
};
const payload = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@document.com',
    company: 'Doe Company'
  },
  {...record}
];

describe('async actions', () => {
  describe('actions', () => {
    it('should create an action to save user list', () => {
      const expectedAction = {
        type: types.SAVE_USER_LIST,
        payload
      }
      expect(actions.saveUserList(payload)).toEqual(expectedAction);
    })
  });
  it('creates SAVE_USER_LIST', () => {

    const expectedActions = [
      { type: types.SAVE_USER_LIST, payload }
    ];

    const store = mockStore([]);

    store.dispatch(actions.saveUserList([...payload]));
    expect(store.getActions()).toEqual(expectedActions);
  })
});