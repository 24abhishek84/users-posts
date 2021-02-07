import {getUserData, onSearch, fetchUserList} from '../usersHelper';
import { userList } from './dataHelper';
import axios from 'axios';

jest.mock('axios');
beforeEach(() => {
  jest.clearAllMocks();
});

  test('getUserData check value', () => {
    const expectedUsers = [{
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      city: "Gwenborough",
      companyName: "Romaguera-Crona"
    }];

    const users = getUserData(userList);
    expect(users).toStrictEqual(expectedUsers);
  });

  test('onSearch check value', () => {
    const e = {target: {value: 'ae'}};
    const filterUserList = jest.fn();
    onSearch(e, filterUserList);
    expect(filterUserList).toHaveBeenCalledWith('ae');
  });

  test('fetchUserList check value', async () => {
    axios.get.mockImplementation(url => {
      return Promise.resolve({data: [...userList], status: 200});
    });
    const saveUserList = jest.fn();
    await fetchUserList(saveUserList);
    expect(saveUserList).toHaveBeenCalledWith(userList);
  });
