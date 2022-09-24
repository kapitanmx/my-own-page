import React from 'react';
import {Wrapper, Content} from './Grid.styles';
import Thumb from '../Thumb';

const Grid = ({childrens}) => {
    const childrensArr = [...childrens];
    return (
        <Wrapper>
            <Content>
                {childrensArr.map(childElem => (
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