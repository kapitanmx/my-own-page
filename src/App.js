import React, {useState, useEffect, useRef} from 'react';

//Components
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

//Hooks
import Loader from './components/Hooks/Loader';

//Styles
import {GlobalStyle} from './GlobalStyle';

// const App = () => {
//   if (Loader()) {
//     return (
//       <>
//         <LoadingScreen />
//         <GlobalStyle />
//       </>
//     )
//   } 
//   else 
//   {
//     return (
//       <>
//         <Header/>
//         <Home />
//         <Dashboard />
//         <Portfolio />
//         <Contact />
//         <Footer />
//         <GlobalStyle />
//       </>
//     );
//   }
// };

const App = () => {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
      <>
        <Header/>
        <Hero executeScroll={handleClick}/>
        <Dashboard ref={ref}/>
        <Portfolio />
        <Contact />
        <Footer />
        <GlobalStyle />
      </>
  );
}

export default App;
