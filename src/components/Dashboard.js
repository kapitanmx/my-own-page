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

const Dashboard = ({title, subtitle, text}) => (
    <Wrapper id="dashboard">
        <Title data-aos="fade-up"><h1>{title}</h1></Title>
        <Text data-aos="fade-up"><h2>{subtitle}</h2></Text>
        <Text data-aos="fade-up">
            <p>{text}</p>
        </Text>
    </Wrapper>
);

export default Dashboard;