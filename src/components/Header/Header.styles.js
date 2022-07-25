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
    color: ${({isScrolled}) => isScrolled ? 'black' : 'white'};;
`;

export const Button = styled.div`
    display: block;
    margin: 20px 20px;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover .Line1 {
        animation: ${lineAnimationIn} 1s cubic-bezier(.5,1.29,1,1);
        animation-fill-mode: forwards;
        /* animation-duration: 2s;
        animation-timing-function: cubic-bezier(.5,1.29,1,1); */
    }
    &:hover .Line2 {
        animation: ${lineAnimationIn} 1s cubic-bezier(.5,1.29,1,1);
        animation-fill-mode: forwards;
        /* animation-duration: 2s;
        animation-timing-function: cubic-bezier(.5,1.29,1,1); */
    }
    &:hover .Line3 {
        animation: ${lineAnimationIn} 1s cubic-bezier(.5,1.29,1,1);
        animation-fill-mode: forwards;
        /* animation-duration: 2s;
        animation-timing-function: cubic-bezier(.5,1.29,1,1); */
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Burger = styled.div`

`;


export const MobileMenu = styled.div`

`;

export const MobileButton = styled.div`

`;

