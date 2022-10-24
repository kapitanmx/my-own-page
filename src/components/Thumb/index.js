import React from 'react';
import {Wrapper, Content} from './Thumb.styles';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Thumb = ({title, text, img, url, clickable}) => (
    <div>
        {clickable ? (
            <a href={`${url}`}>
                <Wrapper data-aos="fade-up">
                    <Content>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <img src={img} />
                    </Content>
                </Wrapper>
            </a>
        ) : (
            <Wrapper data-aos="fade-up">
                <Content>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <img src={img} />
                </Content>
            </Wrapper>
        )}
    </div>
);

export default Thumb;