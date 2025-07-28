  import React from 'react'
  import Carusel from '../Components/PageComponetns/Carusel'
  import MiniBlog from '../Components/PageComponetns/MiniBlog'
  import RenderProducts from '../Components/PageComponetns/RenderProducts'
  import HeadComponent from '../Components/PageComponetns/HeadComponent'
  import { Outlet, useLocation } from 'react-router-dom'

  const Home = () => {
    const location = useLocation();

    return (
      <div className="relative">
        <HeadComponent />
        <Carusel />
        <MiniBlog />
        <RenderProducts />
        <Outlet />
      </div>
    )
  }

  export default Home
