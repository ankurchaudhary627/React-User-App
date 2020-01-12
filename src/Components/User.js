import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Collapse,Card,Icon,Button,Modal,Avatar,Skeleton} from 'antd'
import 'antd/dist/antd.css';
import UserDetails from './UserDetails';

const {Panel}=Collapse
const { Meta } = Card;

function User({user}){

  const USER_URL = `https://jsonplaceholder.typicode.com/users/${user.id}`;
  const [visible, setvisible] = useState(false)
  const [userDetail, setuserDetail] = useState([])
  const [loading, setloading] = useState(true)
  
  async function fetchData(){
    await axios
    .get(USER_URL)
    .then(res=>setuserDetail(res.data))
    .catch(err=>console.log(err));
  }

  function onChange(checked){
      setloading(!checked)
  }

  function showModal(){
    fetchData()
    setvisible(true)
  }

  function handleOk(event){
    setvisible(false)
  }

  function handleCancel(event){
    setvisible(false)
  }
  
  const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };

    return (
      <Card
        title={user.name}
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={`https://joeschmoe.io/api/v1/${user.name}`} />}
      >
        <center>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <Button type="link" onClick={showModal} block>
            <Icon type="info" />
            Details
          </Button>
          <Modal
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Card
                style={{ width: 300, marginTop: 16 }}
            >
              {/* <Skeleton loading={loading} avatar active> */}
                <Meta
                avatar={
                    <Avatar src={`https://joeschmoe.io/api/v1/${userDetail.name}`} />
                }
                title={userDetail.name}
                >
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                  <p>{user.address}</p>
                  <p>{user.phone}</p>
                  <p>{user.website}</p>
                </Meta>
                {/* </Skeleton> */}
            </Card>
                </Modal>
        </center>
      </Card>
    )
}

export default User;
