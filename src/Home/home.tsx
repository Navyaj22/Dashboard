import React from 'react'
import Header from '../Components/Header/header'
import Main from '../Components/Main/main'
import About from '../Components/About/about'
import How from '../Components/How/how'
// import Partners from '../Components/Partners/partners'
import Feature from '../Components/Features/feature'
import Team from '../Components/Team/team'
export const Home = () => {
  return (
    <>
    <Header/>
    <Main/>
    <About/>
    <How/>
    {/* <Partners/> */}
    <Feature/>
    {/* <Team/>   */}
    </>
  )
}