import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PageLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageLayout
