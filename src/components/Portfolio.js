import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Thumb from './Thumb';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px 0;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    clip-path: polygon(0 12%, 100% 0, 100% 88%, 0% 100%);
    background: rgb(60,73,245);
    background: linear-gradient(90deg, rgba(60,73,245,1) 0%, rgba(231,148,233,1) 100%);
    color: var(--white);
    text-align: center;
    margin: 100px 0;
    padding: 50px 20px;
`;

const Text = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px 20px;
`;


const Portfolio = ({PortfolioList}) => (
    <Wrapper id="portfolio">
        <Title><h1 data-aos='zoom-in' data-aos-duration="1000">My Portfolio</h1></Title>
        <Text><h2 data-aos='fade-up'>My own projects</h2></Text>
        <Grid
            children={
                PortfolioList.map(element => (element))
            }
        />
    </Wrapper>
);


export default Portfolio;