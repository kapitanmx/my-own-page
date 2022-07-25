import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 20% auto;
    margin: 0;
    background: var(--black);
`;

export const Wheel = styled.span`
    width: 200px;
    height: 200px;
    border: 8px solid;
    border-color: #fff transparent #fff transparent;
    border-radius: 50%;
    animation: ${rotate} 1s ease-in-out infinite;
`;