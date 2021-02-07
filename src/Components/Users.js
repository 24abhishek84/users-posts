import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../Actions/userActions';
import {Table} from 'antd';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { userColumns } from './constants';
import { fetchUserList, getUserData, onSearch } from './usersHelper';

const Users = (props) => {
  const [selectedRowClass, setselectedRowClass] = useState(null);
  const {setCurrentRecord, filterUserList, saveUserList, userList} = props;
  const { Search } = Input;
  const historyHook = useHistory();

  useEffect(() => {
    fetchUserList(saveUserList);
  }, [saveUserList]);

  const userData = getUserData(userList);


  const onClickRow = async record => {
    const url = `/posts?userId=${record.id}`;
    await setCurrentRecord(record);
    historyHook.push(url);
  };


  return (
    <div>
      <h1>Users</h1>
      {userData.length > 0 &&
        <>
          {/* Search the records by name (case insensitive search) */}
          <Search placeholder="input search text" onChange={(e) => onSearch(e, filterUserList)} style={{ width: 200, marginBottom: 24 }} />
          <Table
            dataSource={userData}
            columns={userColumns}
            rowClassName={selectedRowClass}
            onRow={(record) => {
              return {
                onClick: () => onClickRow(record) // click row
              };
            }}
          />
        </>
      }
      {userData.length === 0 && (<h3>'No Records Found'</h3>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {users} = state;
  return {userList: users.userList};
}

const mapDispatchToProps = dispatch => {
  return {
      ...bindActionCreators({ ...userActions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);