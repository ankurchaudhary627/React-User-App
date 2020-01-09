import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Users from './Components/Users';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [data, setdata] = useState([]);

  async function fetchData() {
    await axios
      .get(USER_SERVICE_URL)
      .then(res => setdata(res))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return 'loading';
  }

  return (
    <BrowserRouter>
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
        <Route path='/users' render={() => <Users users={data} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
