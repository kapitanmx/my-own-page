import React from 'react';
import {Wrapper} from './Footer.styles';

const getCurrentYear = () => {
    const d = new Date();
    const year = d.getFullYear();
    return year.toString();
}

const Footer = () => (
    <Wrapper>
        <p>© {getCurrentYear()} Mikołaj Wołoszyn</p>
    </Wrapper>
);

export default Footer;