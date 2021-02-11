/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {setCurrentRecord, filterUserList, saveUserList} from '../Actions/userActions';
import {Table, Input, Button, Spin} from 'antd';
import { useHistory } from 'react-router-dom';
import { userColumns } from './constants';
import { fetchUserList, getUserData, onSearch } from './usersHelper';

const Users = () => {
  const [loader, setLoader] = useState(false);
  const { Search } = Input;
  const historyHook = useHistory();
  const dispatch = useDispatch();
  const { userList, searchText } = useSelector(state => ({
    userList: state.users.userList,
    searchText: state.users.searchText,
  }), shallowEqual);


  useEffect(() => {
    fetchUserList(saveUserList, dispatch);
  }, []);

  const userData = getUserData(userList);


  const onClickRow = async record => {
    const url = `/posts?userId=${record.id}`;
    await dispatch(setCurrentRecord(record));
    historyHook.push(url);
  };

  const onRefreshList = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      dispatch(filterUserList(searchText));
    }, 3000);
  };

  return (
    <div>
      <h1>Users</h1>

        {userData.length > 0 &&
          <>
            {/* Search the records by name (case insensitive search) */}
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <Search placeholder="input search text" onChange={(e) => onSearch(e, filterUserList, dispatch)} style={{ width: 200, marginBottom: 24, marginRight: '24px' }} />
              <Button type={'primary'} onClick={() => onRefreshList()}>Refresh</Button>
            </div>

              {loader ? <Spin /> :
                <Table
                  dataSource={userData}
                  columns={userColumns}
                  onRow={(record) => {
                    return {
                      onClick: () => onClickRow(record) // click row
                    };
                  }}
                />
              }
          </>
        }
        {userData.length === 0 && (<h3>'No Records Found'</h3>)}
    </div>
  );
};

export default Users;