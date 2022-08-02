import React from 'react';
import {Wrapper, Content, Title, TextBox, Img, Arrow} from './Hero.styles';
import Avatar from '../../images/mikolaj_woloszyn.jpg';

const Hero = () => {
    return (
        <Wrapper>
            <Content>
                <Title>
                    <h1>Mikołaj Wołoszyn</h1>
                </Title>
            </Content>
            <Content>
                <Img src={Avatar}/>
            </Content>
            <Content>
                <TextBox>
                    <h2>Junior fullstack developer</h2>
                    <p>See more below</p>
                </TextBox>

                <Arrow>
                    <div />
                    <div />
                    <div />
                </Arrow>
            </Content>
        </Wrapper>
    )
}

export default Hero;