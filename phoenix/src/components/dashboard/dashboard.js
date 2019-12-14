import React from 'react'

import UserContextProvider from '../../contexts/userContext';
import Header from './Header';

const Dashboard = props => {
  console.log(props.match.params);

  return(
    <UserContextProvider>
      <Header />
      {/* <SavedNotes /> */}
    </UserContextProvider>
  )
}

export default Dashboard