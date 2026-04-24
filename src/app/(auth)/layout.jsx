import NavBar from '@/components/Shared/NavBar'
import React from 'react'

function AuthLayout({children}) {
  return (
   <>
   <NavBar></NavBar>
   {children}

   
   </>
  )
}

export default AuthLayout