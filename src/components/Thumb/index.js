import React from 'react';
import {Wrapper, Content, Img} from './Thumb.styles';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Thumb = ({title, text, img}) => (
    <Wrapper data-aos="fade-up">
        <Content>
            <h3>{title}</h3>
            <p>{text}</p>
            <Img src={img} />
        </Content>
    </Wrapper>
);

export default Thumb;