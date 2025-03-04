import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../Page/Home';
import About from '../Page/About';
import Skills from '../Page/Skills';
import Contact from '../Page/Contact';
import Project from '../Page/Project';

const Router = () => {
  return (
    <>
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about-me' element={<About/>}/>
        <Route  path='/skills' element={<Skills/>}/>
        <Route  path='/project' element={<Project/>}/>
        <Route  path='/contact-me' element={<Contact/>}/>
    </Routes>
    </>
  )
};

export default Router;
