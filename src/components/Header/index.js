import React, {useState} from 'react';
import {Wrapper, Content, Button, Line} from './Header.styles';


const Header = () => {

    const [scrolled, isScrolled] = useState(false);

    window.addEventListener('scroll', e => {
        e.preventDefault();
        if (window.scrollY > 150) {
            isScrolled(true);
        } else {
            isScrolled(false);
        }
    })

    return (
        <Wrapper isScrolled={scrolled}>
            <Button>
                Background
                <Line className="Line1"/>
            </Button>
            <Button>
                My portfolio
                <Line className="Line2"/>
            </Button>
            <Button>
                Contact
                <Line className="Line3"/>
            </Button>
        </Wrapper>
    )
};

export default Header;