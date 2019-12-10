import React from 'react'

const Dashboard = props => {
  console.log(props.match.params);

  return(
    <h3>Hello Dashboard</h3>
  )
}

export default Dashboard