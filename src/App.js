import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {GlobalStyle} from './GlobalStyle';

const App = () => (
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

export default App;
