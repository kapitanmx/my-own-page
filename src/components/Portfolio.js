import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Thumb from './Thumb';
import Img1 from '../images/page1.png';

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

const Portfolio = () => (
    <Wrapper>
        <Title><h1>My Portfolio</h1></Title>
        <Text><h2>My own projects</h2></Text>
        <Grid>
            <Thumb 
                title='Current Page'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                img={Img1}
            />
            <Thumb
                title='Technologiczni'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                img={Img1}
            />
            <Thumb
                title='Task manager'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                img={Img1}
            />
            <Thumb 
                title='Current Page'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                img={Img1}
            />
            <Thumb
                title='Technologiczni'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                img={Img1}
            />
            <Thumb
                title='Task manager'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                img={Img1}
            />
        </Grid>
    </Wrapper>
);

export default Portfolio;