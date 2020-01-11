import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Collapse, Icon} from 'antd'
import 'antd/dist/antd.css';

const {Panel}=Collapse
// function User({ handleClose, show, id, children }) {
//   if (show) {
//     return (
      // <div>
      //   {id}
      //   <button onClick={handleClose}>Close</button>
      // </div>
//     );
//   } else {
//     return <div></div>;
//   }
// }

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
  }, []);

  // if(state){
  //   return (
  //     <div onClick={hideModal}>
  //       <p>
  //         Name: {user.name}
  //         <br/>
  //         Username: {user.username}
  //         <br/>
  //         Email: {user.email}
  //         <br/>
  //         Phone: {user.phone}
  //         <br/>
  //         Website: {user.website}
  //         <br/>

  //       </p>
  //       {/* <br /> */}
  //       {/* <button onClick={hideModal}>Close</button> */}
  //     </div>
  //   )
  // }
  const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };
    return (
      // <MenuItem onClick={() => setstate(!state)}>
      //   {user.name}
      // </MenuItem>
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
    )
}

export default User;
