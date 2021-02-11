import axios from "axios";
import { jsonPlaceholderApi } from "./constants";

export const getUserData = userList => {
  const userData = userList?.length ? userList.map(user => {
    const {id, name, email, address, company} = user;
    return {id, name, email, city: address?.city, companyName: company?.name};
  }) : [];
  return userData;
};

export const onSearch = (e, filterUserList, dispatch) => {
  dispatch(filterUserList(e.target.value));
};

export const fetchUserList = async (saveUserList, dispatch) => {
  const response = await axios.get(`${jsonPlaceholderApi}/users`);
  if (response?.status === 200 && response.data.length) {
    dispatch(saveUserList([...response.data]));
  }
};