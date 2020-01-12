import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import { BrowserRouter,Switch,Route,useHistory,withRouter,Link } from 'react-router-dom';
import { Row,Col, Card, Menu, List } from 'antd';
import 'antd/dist/antd.css';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
  const [users, setusers] = useState([]);
  let history = useHistory();

  async function fetchData() {
    await axios
      .get(USERS_URL)
      .then(res => setusers(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (users.length === 0) {
    return 'loading';
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
    
    <div className="gutter-example">
      <Row type="flex" justify="start">
        {
          users.map(item=>(
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className="gutter-box">
                <User userId={item.id} />
              </div>              
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default Users;
