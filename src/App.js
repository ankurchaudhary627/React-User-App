import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './Components/Users';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
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
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className='App'>
      <A href='/'>Home Page</A>
      <br />
      <A href='/users'>Users Page</A>
      {routeRes}
    </div> */
}
