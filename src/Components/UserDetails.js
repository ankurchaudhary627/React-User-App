import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Card, Icon, Skeleton, Avatar } from 'antd';

const { Meta } = Card;

function UserDetails({ userId }) {
  const USER_URL = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const [user1, setuser1] = useState([]);
  const [loading, setloading] = useState(true);

  // const [state, setstate] = useState(false);

  async function fetchData() {
    await axios
      .get(USER_URL)
      .then(res => setuser1(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{user1.name}</div>;
}

export default UserDetails;
