import React from 'react';
import { MenuItem, Link, MenuList } from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom';

const Layout = props => {
  let history = useHistory();
  const { children } = props;
  return (
    <div>
      <div>
        <MenuList>
          <MenuItem
            component={Link}
            to='/'
            selected={'/' === history.location.pathname}
            onClick={() => history.push('/')}
          >
            Home
          </MenuItem>
          <MenuItem
            component={Link}
            to='/users'
            selected={'/users' === history.location.pathname}
            onClick={() => history.push('/users')}
          >
            Users
          </MenuItem>
        </MenuList>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default withRouter(Layout);
