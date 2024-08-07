import React from 'react'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'
import Main from '../components/main/Main'
import Footer from '../components/footer/Footer'
import Briefcase from '../components/main/Briefcase'
import Experience from '../components/main/Experience'

const RootPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Layout />
      <Main />
      <Experience />
      <Briefcase />
      <Footer />
    </div>
  )
}

export default RootPage
