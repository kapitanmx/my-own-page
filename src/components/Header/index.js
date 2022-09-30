import React, {useState} from 'react';
import {Wrapper, Content, Button, Line, MobileMenu, MobileButton, MobileBurger} from './Header.styles';


const Header = ({links}) => {

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
                {links.map(link => (
                    <MobileButton onClick={() => setOpen(!open)}>
                        <a href={'#' + link.toLowerCase()}>{link}</a>
                    </MobileButton>
                ))}
            </MobileMenu>
            {links.map(link => (
                <Button>
                    <a href={'#' + link.toLowerCase()}>{link}</a>
                    <Line className={"Line" + (links.indexOf(link) + 1)}/>
                </Button>
            ))}
        </Wrapper>
    )
};

export default Header;