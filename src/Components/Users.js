import React from 'react';

function Users(props) {
  console.log(props.users.data);
  return props.users.data.map(item => (
    <div>
      <a href={`https://jsonplaceholder.typicode.com/users/${item.id}`}>
        {item.name}
      </a>
    </div>
  ));
}

export default Users;
