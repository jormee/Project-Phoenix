import React from 'react';

const Layout = props => {
  return (
    <div>
      <Nav />
        <div>{props.children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;