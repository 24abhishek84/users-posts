import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../Actions/userActions';
import axios from 'axios';
import {Table, Spin} from 'antd';
import { jsonPlaceholderApi, postsColumns } from './constants';

const Posts = (props) => {
  const {currentRecord, userPosts, saveUserPosts} = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchUserPosts = async () => {
      const url = `${jsonPlaceholderApi}/posts?userId=${currentRecord}`;
      const response = await axios.get(url);
      if (response?.status === 200 && response.data.length) {
        setLoading(false);
        saveUserPosts([...response.data]);
      }
    };
    fetchUserPosts();
  }, [currentRecord, saveUserPosts]);

  const postData = userPosts.length ? [...userPosts] : [];

  return (
    <div>
      { loading ? <Spin /> :
        <>
          <h1>Posts</h1>
          {postData.length > 0 && <Table dataSource={postData} columns={postsColumns} />}
          {postData.length === 0 && (<h3>No Posts Found For User</h3>)}
        </>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const {users} = state;
  return {
    currentRecord: users.currentRecord,
    userPosts: [...users.userPosts]
  };
}

const mapDispatchToProps = dispatch => {
  return {
      ...bindActionCreators({ ...userActions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);