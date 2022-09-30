import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import ContactForm from './ContactForm';
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
    padding: 150px 20px;
`;

const Contact = ({links}) => {
    return (
        <Wrapper id="contact">
            <h1 data-aos='zoom-in' data-aos-duration="1000">Let's stay in touch</h1>
            <h2 data-aos='fade-up' data-aos-delay="200">👇 Contact form 👇</h2>
            <ContactForm />
            {/* <h2 data-aos='fade-up' data-aos-delay="200">👇 How to reach me 👇</h2>
            {links.map((element) => (
                <a href={element.link} data-aos='fade-up' data-aos-delay="300"><p>{element.name}</p></a>
            ))}
            <p data-aos='fade-up' data-aos-delay="400">Via Mobile: +48 664 412 219</p>
            <h2 data-aos='fade-up' data-aos-delay="500">I believe that our collaboration might be successful!</h2> */}
        </Wrapper>
    );
}

export default Contact;