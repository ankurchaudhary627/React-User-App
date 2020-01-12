import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Collapse,Card,Icon,Avatar} from 'antd'
import 'antd/dist/antd.css';

const {Panel}=Collapse
const { Meta } = Card;


function User({userId}){

  const USER_URL = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const [user, setuser] = useState([])
  // const [state, setstate] = useState(false);

  async function fetchData(){
    await axios
    .get(USER_URL)
    .then(res=>setuser(res.data))
    .catch(err=>console.log(err));
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };

    return (
      <Collapse accordion={true}
        bordered={false}>
        <Panel showArrow={false} header={user.name} key={userId} style={customPanelStyle}>
          <p>
            {user.name}
          </p>
          <p>
            {user.email}
          </p>
          <p>
            {user.phone}
          </p>
          <p>
            {user.website}
          </p>
        </Panel>
      </Collapse>


      // <>
      // {console.log('inside single user')}
      //   <p>
      //     {user.name}
      //   </p>
      //   <p>
      //     {user.email}
      //   </p>
      //   <p>
      //     {user.phone}
      //   </p>
      //   <p>
      //     {user.website}
      //   </p>
      //   <button>Details</button>
      // </>
    )
}

export default User;
