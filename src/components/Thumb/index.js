import React from 'react';
import {Wrapper, Content, Img} from './Thumb.styles';

const Thumb = ({title, text, img}) => (
    <Wrapper>
        <Content>
            <h3>{title}</h3>
            <p>{text}</p>
            <Img src={img} />
        </Content>
    </Wrapper>
)

export default Thumb;