import React from 'react'

import { Navbar } from './'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout