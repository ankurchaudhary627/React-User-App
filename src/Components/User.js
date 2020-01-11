import React from 'react';

function User({ handleClose, show, id, children }) {
  if (show) {
    return (
      <div>
        {id}
        <button onClick={handleClose}>Close</button>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default User;
