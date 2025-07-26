import React, { useEffect, useState } from 'react';
import { AppContextProvider } from './Context/AppContext';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Components/PageComponetns/Welcome';
import Loader from './Components/PageComponetns/Loader'; // loading component

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AppContextProvider>
      {loading && <Loader />}
      <Welcome />
      <Header />
      <Outlet />
      <Footer />
    </AppContextProvider>
  );
};

export default App;
