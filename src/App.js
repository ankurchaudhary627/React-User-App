import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Users from './Components/Users';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  const breadcrumbItems = [
    <Breadcrumb.Item key='home'>
      <Link to='/'>Home</Link>
    </Breadcrumb.Item>,
    <Breadcrumb.Item>
      <Link to='/users'>Users</Link>
    </Breadcrumb.Item>
  ];
  return (
    <BrowserRouter>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }}>
            <Menu.Item key='1'>
              <Link to='/' />
              Home
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/users' />
              Users
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbItems}
          </Breadcrumb>
          <Route
            exact
            path='/'
            render={() => (
              <div>
                <center>Home</center>
              </div>
            )}
          />
          <Route path='/users' render={() => <Users />} />
          {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div> */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          User App ©2020 Created by g0ku007
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
