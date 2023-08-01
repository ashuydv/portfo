import React from 'react'
import Hero from '../components/Hero'
import ServiceInfo from 'components/Service'
import Skills from 'components/Skills'
import Blogs from 'components/Blogs'
import Layout from 'components/Layout'
import CTA from 'components/CTA'

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <ServiceInfo />
        <Skills />
        <Blogs />
        <CTA/>
      </Layout>
    </div>
  )
}

export default Home