import React, { useEffect } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Header from './Header';
import Sidebars from './Sidebars';
import About from './About';
import Experience from './Experience';
import MajorProjects from './MajorProjects';
import MinorProjects from './MinorProjects';
import Contact from './Contact';
import Footer from './Footer';
import TopButton from './TopButton';



function App() 
{
  useEffect(() => 
  {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <TopButton/>
      <Sidebars/>
      <About/>
      <Experience/>
      <MajorProjects/>
      <MinorProjects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

