import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Thumb from './Thumb';
import Img1 from '../images/page1.png';
import Img2 from '../images/technologiczni.png';
import GitHubImg from '../images/github.png';
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


const Portfolio = () => {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper id="portfolio">
            <Title><h1 data-aos='zoom-in'>My Portfolio</h1></Title>
            <Text><h2 data-aos='fade-up'>My own projects</h2></Text>
            <Grid>
                <Thumb 
                    title='Current Page'
                    text='Simple portfolio page, created with React'
                    img={Img1}
                    onClick={() => setOpen(!open)}
                />
                <Thumb
                    title='Technologiczni.edu.pl'
                    text='Commisioned page, created with React'
                    img={Img2}
                    onClick={() => setOpen(!open)}
                />
                <Thumb
                    title='Task manager'
                    text='A CRUD application, created in Go'
                    img={GitHubImg}
                    onClick={() => setOpen(!open)}
                />
                <Thumb 
                    title='Currency rates app'
                    text='Very simple client for external API'
                    img={GitHubImg}
                    onClick={() => setOpen(!open)}
                />
                <Thumb
                    title='ATM Simulator'
                    text='A CRUD application, created in Go'
                    img={GitHubImg}
                    onClick={() => setOpen(!open)}
                />
                <Thumb
                    title='Simple weather app'
                    text='A simple CRUD application, created in Go'
                    img={GitHubImg}
                    onClick={() => setOpen(!open)}
                />
            </Grid>
        </Wrapper>
    );
};

export default Portfolio;