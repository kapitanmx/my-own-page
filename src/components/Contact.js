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
        <p>Via Facebook: </p>
        <p>Via Github: </p>
        <p>Via LinkedIn: </p>
        <p>Via Email: </p>
        <p>Via Mobile: </p>
        <h2>I believe that our collaboration will be great! </h2>
    </Wrapper>
);

export default Contact;