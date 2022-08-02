import React from 'react';
import styled from 'styled-components';

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
    <Wrapper>
        <h1>Let's stay in touch</h1>
        <h2>👇 How to reach me 👇</h2>
        <a href="https://github.com/kapitanmx"><p>Via Github</p></a>
        <a href="https://www.linkedin.com/in/miko%C5%82aj-wo%C5%82oszyn-a543941b3/"><p>Via LinkedIn</p></a>
        <p>Via Email: kapitanmx823@gmail.com</p>
        <p>Via Mobile: +48 664 412 219</p>
        <h2>I believe that our collaboration will be successful! </h2>
    </Wrapper>
);

export default Contact;