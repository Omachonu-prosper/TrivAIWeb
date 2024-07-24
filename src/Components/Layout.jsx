import React from 'react'

import { Navbar } from './'

const Layout = ({children}) => {
  return (
    <div className='h-screen flex flex-col overflow-y-auto'>
        <Navbar />
        <div className='flex-1'>
            {children}
        </div>
    </div>
  )
}

export default Layout