import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { MenuItem, Link, MenuList } from '@material-ui/core';
import User from './User';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
  const [data, setdata] = useState([]);
  const [state, setstate] = useState(false);

  async function fetchData() {
    await axios
      .get(USER_SERVICE_URL)
      .then(res => setdata(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return 'loading';
  }

  function hideModal() {
    setstate(false);
  }

  const showModal = () => {
    setstate(true);
  };

  console.log('state', state);

  return (
    <div>
      <MenuList>
        {data.map(item => (
          <MenuItem onClick={() => setstate(!state)}>
            {item.name}
            <User show={state} id={item.id} handleClose={hideModal} />
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
}

export default Users;
