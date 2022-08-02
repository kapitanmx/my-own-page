import React from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';
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
  return (
      <>
        <Header/>
        <Home />
        <Dashboard />
        <Portfolio />
        <Contact />
        <Footer />
        <GlobalStyle />
      </>
  );
}

export default App;
