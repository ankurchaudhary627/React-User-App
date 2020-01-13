import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import { Spin, Alert } from 'antd';
import { Row, Col } from 'antd';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
  const userPerPage = 3;
  const [users, setusers] = useState([]);
  const [pageState, setpageState] = useState(1);
  const [currUsers, setcurrUsers] = useState([]);
  const [displaySize, setdisplaySize] = useState(false);

  async function fetchData() {
    await axios
      .get(USERS_URL)
      .then(res => setusers(res.data))
      .catch(err => console.log(err));
  }

  function onChangePage(page) {
    console.log(page);
    setpageState(page);
    const last = page * userPerPage;
    const first = last - userPerPage;
    setcurrUsers(users.slice(first, last));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize.bind(this));
    resize();
  }, []);

  function resize() {
    setdisplaySize(window.innerWidth <= 760);
  }

  useEffect(() => {
    setcurrUsers(users.slice(0, 3));
  }, [users]);

  if (users.length === 0) {
    return (
      <Spin tip='Loading...'>
        <Alert message='Loading Users' type='info' />
      </Spin>
    );
  }
  return (
    <div className='gutter-example'>
      <center>
        <h1>Welcome to user-app!</h1>
      </center>
      <br />
      <Row
        type='flex'
        justify='start'
        style={{ display: 'flex', flexDirection: displaySize ? 'column' : '' }}
      >
        {currUsers.map(item => (
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <div className='gutter-box'>
              <User user={item} />
            </div>
            <br />
          </Col>
        ))}
      </Row>
      <br />
      <center>
        <Pagination
          current={pageState}
          onChange={onChangePage}
          total={(users.length / userPerPage) * 10}
        />
      </center>
    </div>
  );
}

export default Users;
