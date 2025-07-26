import React from 'react'
import Carusel from '../Components/PageComponetns/Carusel'
import MiniBlog from '../Components/PageComponetns/MiniBlog'
import RenderProducts from '../Components/PageComponetns/RenderProducts'
import HeadComponent from '../Components/PageComponetns/HeadComponent'

const Home = () => {
  return (
    <>
    <HeadComponent/>
    <Carusel/>
    <MiniBlog/>
    <RenderProducts/>
    </>
  )
}

export default Home
