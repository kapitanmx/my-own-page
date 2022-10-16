import React from 'react';

//Components
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ArrowTop from './components/ArrowTop';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

//Hooks
import Loader from './components/Hooks/Loader';

//Styles
import {GlobalStyle} from './GlobalStyle';

//Imgs
import Img1 from './images/page1.jpg';
import Img2 from './images/technologiczni.jpg';
import GitHubImg from './images/github.jpg';

const App = () => {

  const AuthorData = {
    "name" : "Mikołaj Wołoszyn",
    "role" : "Junior full-stack dev",
    "text" : "See more",
  };

  const Content = {
    "title" : "Background",
    "subtitle" : "Hi there! 👋",
    "text" : `My name is Mikołaj, I'm currently 20 years old. I love discover new thinks, such as many technologies, especially in IT sector. 
    This is my biggest hobby. For many years, I was self-studying. Now I'm an undergraduate, my Alma Mater is Silesian University of Technology in Gliwice, Poland.
    I gained some experience in Front-End, I know well basics and many advanced thinks, in languages and tools used in this branch, like 
    JS, React, NPM, SCSS, Styled Components, Webpack etc. I also trying to learn Back-End stack, such as Go, REST API, MongoDB, Firebase, Docker.

    I can build everything, from little and cheap websites based on templates, to bigger and custom web applications with necessary solutions, 
    like an e-commerce web platform. If you want to know more, I invite you to contact me :)`,
  };

  const PortfolioList = [
    {
        "title" : "Current Page",
        "text" : "Simple portfolio page, created with React",
        "img" : `${Img1}`,
        "url" : `/`
    },
    {
        "title" : "Technologiczni.edu.pl",
        "text" : "Commisioned page, created with React",
        "img" : `${Img2}`,
        "url" : `http://technologiczni.edu.pl/`
    },
    {
        "title" : "Task manager",
        "text" : "A CRUD application, created in Go",
        "img" : `${GitHubImg}`,
        "url" : `/`
    },
    {
        "title" : "Currency rates app",
        "text" : "Very simple client for external API",
        "img" : `${GitHubImg}`,
        "url" : `https://github.com/kapitanmx/currency-exchange-app`
    },
    {
        "title" : "ATM Simulator",
        "text" : "A CRUD application, created in Go",
        "img" : `${GitHubImg}`,
        "url" : `https://github.com/kapitanmx/ATM`
    },
    {
        "title" : "Simple weather app",
        "text" : "A simple CRUD application, created in Go",
        "img" : `${GitHubImg}`,
        "url" : `/`
    },
  ];

  const LinkElements = [
    {
      "name" : "Via Github",
      "link" : "https://github.com/kapitanmx"
    },
    {
      "name" : "Via LinkedIn",
      "link" : "https://www.linkedin.com/in/miko%C5%82aj-wo%C5%82oszyn-a543941b3/"
    },
    {
      "name" : "Via Email",
      "link" : "mailto:kapitanmx823@gmail.com?subject=subject&cc=cc@gmail.com"
    }
  ];

  const Links = ["Dashboard", "Portfolio", "Contact"];
 
  return (
      <>
        <Header
            links={Links}
        />
        <ArrowTop />
        <Hero 
          title={AuthorData.name}
          subtitle={AuthorData.role}
          linkText={AuthorData.text}
        />
        <Dashboard
          title={Content.title}
          subtitle={Content.subtitle}
          text={Content.text}
        />
        <Portfolio 
          PortfolioList={PortfolioList}
        />
        <Contact 
          links={LinkElements}
        />
        <Footer />
        <GlobalStyle />
      </>
  );
}

export default App;
