import React, {useState} from 'react';
import {Wrapper, Content, Button, Line, MobileMenu, MobileButton, MobileBurger} from './Header.styles';


const Header = () => {

    const [scrolled, isScrolled] = useState(false);
    const [open, setOpen] = useState(false);

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
            <MobileBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </MobileBurger>
            <MobileMenu open={open} setOpen={setOpen}>
                <MobileButton onClick={() => setOpen(!open)}>
                    <a href='#dashboard'>Background</a>
                </MobileButton>
                <MobileButton onClick={() => setOpen(!open)}>
                    <a href='#portfolio'>Portfolio</a>
                </MobileButton>
                <MobileButton onClick={() => setOpen(!open)}>
                    <a href='#contact'>Contact</a>
                </MobileButton>
            </MobileMenu>
            <Button>
                <a href="#dashboard">Background</a>
                <Line className="Line1"/>
            </Button>
            <Button>
                <a href="#portfolio">My portfolio</a>
                <Line className="Line2"/>
            </Button>
            <Button>
                <a href="#contact">Contact</a>
                <Line className="Line3"/>
            </Button>
        </Wrapper>
    )
};

export default Header;