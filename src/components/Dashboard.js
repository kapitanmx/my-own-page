import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Wrapper = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 20px;
`;

const Title = styled.div`
    display: flex;
    padding: 20px 20px;
`;

const Text = styled.div`
    display: flex;
    padding: 20px 20px;
`;

const Dashboard = ({ref}) => (
    <Wrapper ref={ref} id="dashboard">
        <Title data-aos="fade-up"><h1>Dashboard</h1></Title>
        <Text data-aos="fade-up"><h2>Hi there! 👋</h2></Text>
        <Text data-aos="fade-up">
            <p>My name is Mikołaj, I'm currently 20 years old. I love discover new thinks, such as many technologies, especially in IT sector. 
            For many years, I was self-studying. Now I'm an undergraduate, my Alma Mater is Silesian University of Technology in Gliwice, Poland.
            I gained some experience in Front-End, I know well basics and many advanced thinks, in languages and tools used in this branch, like 
            JS, React, NPM, SCSS, Styled Components, Webpack etc. I also trying to learn Back-End stack, such as Go, REST API, MongoDB, Firebase, Docker.
            Of course, I can using Git :)</p>
        </Text>
        <Text data-aos="fade-up">
            <p>I can build everything, from little and cheap websites based on templates, to bigger and custom web applications with necessary solutions, 
                like a web platform. If you want to know more, I invite you to contact me :)
            </p>
        </Text>
    </Wrapper>
);

export default Dashboard;