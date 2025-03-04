import React from 'react';
import Router from '../Route/Router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
  return <>
  <Header/>
  <main>
    <Router/>
  </main>
  <Footer/>

  </>;
};

export default Layout;
