import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    clip-path: polygon(0 0, 100% 12%, 100% 100%, 0% 100%);
    background: var(--black);
    color: var(--white);
    margin: 0;
    padding: 100px 20px;
`;

const Contact = () => (
    <Wrapper id="contact">
        <h1 data-aos='zoom-in'>Let's stay in touch</h1>
        <h2 data-aos='fade-up'>👇 How to reach me 👇</h2>
        <a href="https://github.com/kapitanmx" data-aos='fade-up'><p>Via Github</p></a>
        <a href="https://www.linkedin.com/in/miko%C5%82aj-wo%C5%82oszyn-a543941b3/" data-aos='fade-up'><p>Via LinkedIn</p></a>
        <a href="mailto:kapitanmx823@gmail.com?subject=subject&cc=cc@gmail.com" data-aos='fade-up'><p>Via Email</p></a>
        <p data-aos='fade-up'>Via Mobile: +48 664 412 219</p>
        <h2 data-aos='fade-up'>I believe that our collaboration might be successful! </h2>
    </Wrapper>
);

export default Contact;