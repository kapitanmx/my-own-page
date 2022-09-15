import styled, {keyframes} from 'styled-components';

const lineAnimationIn = keyframes`
    from {
        width: 0%;
    } to {
        width: 100%;
    }
`;

const lineAnimationOn  = keyframes`
    from {
        width: 100%;
    } to {
        width: 0%;
    }
`;

export const Line = styled.div`
    display: block;
    width: 0%;
    height: 5px;
    background: ${({isScrolled}) => isScrolled ? 'black' : 'white'};
    animation: ${lineAnimationOn} 1.5s cubic-bezier(.5,1.29,1,1);
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 999;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    padding: 0 20px;
    box-shadow: ${({isScrolled}) => isScrolled ? '1px 1px 24px 0px rgba(66, 68, 90, 1)' : 'none'};
    background: ${({isScrolled}) => isScrolled ? 'white' : 'black'};
    a {
        color: ${({isScrolled}) => isScrolled ? 'black' : 'white'};
    }
    @media screen and (max-width: 768px) {
        height: 60px;
        background: white;
    }
`;

export const Button = styled.div`
    display: block;
    margin: 20px 20px;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover .Line1 {
        animation: ${lineAnimationIn} 1s cubic-bezier(.5,1.29,1,1);
        animation-fill-mode: forwards;
    }
    &:hover .Line2 {
        animation: ${lineAnimationIn} 1s cubic-bezier(.5,1.29,1,1);
        animation-fill-mode: forwards;
    }
    &:hover .Line3 {
        animation: ${lineAnimationIn} 1s cubic-bezier(.5,1.29,1,1);
        animation-fill-mode: forwards;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileMenu = styled.nav`
    display: none;
    flex-direction: column;
    justify-content: center;
    background: var(--black);
    color: white;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 20rem 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    @media screen and (max-width: 940px) {
        display: flex;
        width: 100%;
    }

    @media screen and (max-height: 790px) {
        padding-top: 23rem;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0D0C1D;
        text-decoration: none;
        transition: color 0.3s linear;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
`;

export const MobileButton = styled.button`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: var(--white);
    background: var(--black);
    width: 100%;
    margin: 15px 0;
    padding: 30px 60px;
    cursor: pointer;
    border: none;
    &:focus {
        outline: none;
    }
    @media screen and (max-height: 790px) {
        margin: 5px 0;
    }
    a {
        color: var(--white);
    }
`;

export const MobileBurger = styled.div`
    position: absolute;
    top: 20%;
    right: 1.5rem;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    @media screen and (max-width: 768px) {
        display: flex;
    }

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ open }) => open ? 'white' : 'black'};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

