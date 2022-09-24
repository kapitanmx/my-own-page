import React from 'react';
// import Avatar from '../../images/mikolaj_woloszyn.jpg';
import styled, {keyframes} from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const ImgAnimationIn = keyframes`
    from {
        transform: scale(1);
    } to {
        transform: scale(1.4);
    }
`;

const ImgAnimationOut = keyframes`
    from {
        transform: scale(1.4);
    } to {
        transform: scale(1);
    }
`;

const ArrowAnimation = keyframes`
    0% {
        height: 0;
    } 50% {
        height: 70px;
    } 100% {
        height: 0;
    }
`;

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`;

const blinkCaret = keyframes`
    from, to { border-color: transparent; }
    50% {border-color: white;}
`;

const rainbow = keyframes`
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
`;

const Wrapper = styled.div`
    display: flex;
    background: var(--black);
    flex-direction: column;
    justify-content: center;
    opacity: 1;
    margin: 0;
    padding: 0 auto;
    height: 90vh;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
    @media screen and (max-width: 720px) {
        height: 800px;
    }
    h1 {
        max-width: 480px;
        overflow: hidden;
        border-right: .15em solid var(--white);
        white-space: nowrap;
        margin: 0 auto;
        padding: 0;
        letter-spacing: .10em;
        animation:
            ${typing} 3.5s steps(40, end),
            ${blinkCaret} .75s step-end infinite;
        @media screen and (max-width: 730px) {
            font-size: 2rem;
            margin: 0;
        }
    }
    h2 {
        background: rgb(60,73,245);
        background: linear-gradient(90deg, rgba(60,73,245,1) 36%, rgba(231,148,233,1) 72%);
        /* background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        background-size: 1800% 1800%; */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /* animation: ${rainbow} 18s ease infinite; */
    }
`;

const Content = styled.div`
    display: flex:
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    color: var(--white);
    margin: 0;
    padding: 50px 50px;
    @media screen and (max-width: 730px) {
        padding: 50px 0;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
    margin: 0;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    color: var(--white);
    margin: 0;
    padding: 20px 20px;
`;

const Arrow = styled.span`
    position: relative;
    bottom: 0;
    right: 0;
    left: 50%;
    margin: 0;
    div {
        width: 2px;
        position: absolute;
        background: var(--white);
        
        &:nth-child(1) {
            height: 0;
            animation: ${ArrowAnimation} 2.3s infinite ease-in-out;
        }

        &:nth-child(2) {
            height: 10px;
            top: 65px;
            left: -3px;
            transform: rotate(-45deg);
        }

        &:nth-child(3) {
            height: 10px;
            top: 65px;
            left: 3px;
            transform: rotate(45deg);
        }
    }
`;

export const Button = styled.div`
    display: block;
    margin: 20px 20px;
    padding: 20px 20px;
    text-decoration: none;
    font-size: 1.2rem;
`;

// const Img = styled.img`
//     position: relative;
//     left: 47%;
//     width: 120px;
//     height: 120px;
//     margin: 0;
//     clip-path: circle(50% at 50% 50%);
//     animation: ${ImgAnimationOut} 0.5s ease-out;
//     &:hover {
//         animation: ${ImgAnimationIn} 0.5s ease-in;
//         animation-fill-mode: forwards;
//     }
// `;

const Hero = ({title, subtitle, linkText}) => {
    return (
        <Wrapper>
            <Content>
                <Title>
                    <h1 data-aos='fade-in'>{title}</h1>
                </Title>
            </Content>
            {/* <Content>
                <Img src={Avatar}/>
            </Content> */}
            <Content>
                <TextBox>
                    <h2 data-aos='fade-up' data-aos-duration="3000">{subtitle}</h2>
                    <Button data-aos='fade-up' data-aos-duration="3000">
                        <a href="#dashboard">{linkText}</a>
                    </Button>
                </TextBox>
                <div data-aos='fade-in' data-aos-delay="400" data-aos-duration="3000">
                    <Arrow>
                        <div />
                        <div />
                        <div />
                    </Arrow>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Hero;