import common from '../../Reducers/userReducer';
import {initialState} from '../../Reducers/userReducer';

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(common(undefined, {})).toMatchSnapshot()
  })

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

  it('should handle SAVE_USER_LIST', () => {
    expect(
      common(initialState,
      {
        type: 'SAVE_USER_LIST',
        payload
      })
    ).toMatchSnapshot()
  });

  it('should handle SET_CURRENT_RECORD', () => {
    expect(
      common(initialState,
      {
        type: 'SET_CURRENT_RECORD',
        payload: {...record}
      })
    ).toMatchSnapshot()
  })
})

