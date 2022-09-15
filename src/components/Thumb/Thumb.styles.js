import styled, {keyframes} from 'styled-components'

const animatedThumbIn = keyframes`
    from {
        transform: scale(1);
    } to {
        transform: scale(1.1);
    }
`;

const animatedThumbOut = keyframes`
    from {
        transform: scale(1.1);
    } to {
        transform: scale(1);
    }
`;

export const Wrapper = styled.div`
    -webkit-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
    border-radius: 25px;
    margin: 0;
    padding: 20px 20px;
    width: 100%;
    max-width: 720px;
    animation: ${animatedThumbOut} 0.3s ease-out;
    &:hover {
        animation: ${animatedThumbIn} 0.3s ease-in;
        animation-fill-mode: forwards;
    }
    @media screen and (max-width: 920px) {
        animation: none !important;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    h3 {
        text-align: center;
    }
`;

export const Img = styled.img`
    
`;