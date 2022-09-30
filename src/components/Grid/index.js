import React from 'react';
import {Wrapper, Content} from './Grid.styles';
import Thumb from '../Thumb';

const Grid = ({children}) => {
    return (
        <Wrapper>
            <Content>
                {children.map(childElem => (
                    <Thumb 
                        title={childElem.title} 
                        text={childElem.text}
                        img={childElem.img}
                    />
                ))}
            </Content>
        </Wrapper>
    );
}

export default Grid;