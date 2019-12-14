import React, { useContext } from 'react';

import { UserContext } from '../../contexts/userContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return(
    <div>
      <h3>Welcome {user.name}</h3>
      <div>
        {user.avatar}
      </div>
    </div>
  )
}

export default Header;