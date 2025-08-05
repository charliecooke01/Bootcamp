import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function UserSelector() {
  const { changeUser } = useContext(UserContext);

  const handleIdChange = (e) => {
    changeUser(e.target.value);
  };

  return (
    <div>
      <label htmlFor="username">Choose the username: </label>
      <input
        type="string"
        id="username"
        onChange={handleIdChange}
      />
    </div>
  );
}

export default UserSelector;
