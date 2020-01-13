import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import { Spin, Alert } from 'antd';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  withRouter,
  Link
} from 'react-router-dom';
import { Row, Col, Card, Button, Icon } from 'antd';
import { Pagination, Modal } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
  const userPerPage = 3;
  const [users, setusers] = useState([]);
  const [pageState, setpageState] = useState(1);
  const [currUsers, setcurrUsers] = useState([]);
  const [visible, setvisible] = useState(false);

  console.log('users', users);
  console.log('curr users', currUsers);

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
    // <div>
    //   <h1>Welcome to user-app!</h1>
    //   {/* <MenuList>
    //     {users.map(item => (
    //       <User userId={item.id} />
    //     ))}
    //   </MenuList> */}
    //   {users.map(item=>(
    //     <User userId={item.id} />
    //   ))}
    // </div>

    // <div className="gutter-example" >
    //   <center><h1>Welcome to user-app!</h1></center>
    //   <Row type="flex" justify="start">
    //     {
    //       users.map(item=>(
    //         <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    //           <div className="gutter-box">
    //             <User userId={item.id} />
    //           </div>
    //         </Col>
    //       ))
    //     }
    //   </Row>
    // </div>

    <div className='gutter-example'>
      <center>
        <h1>Welcome to user-app!</h1>
      </center>
      <br />
      <Row
        type='flex'
        justify='start'
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {currUsers.map(item => (
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <div className='gutter-box'>
              <User user={item} />
            </div>
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
