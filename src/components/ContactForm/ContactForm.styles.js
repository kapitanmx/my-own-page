import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 60px 20px;
    p {
        font-size: 0.8rem;
    }
`;

export const StyledField = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    padding: 20px 20px;
    border-radius: 40px;
    outline: none;
`;

export const StyledTextArea = styled.textarea`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    width: 100%;
    height: 30%;
    border-radius: 20px;
    outline: none;
`;

export const StyledButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    padding: 10px 10px;
    border-radius: 15px;
    text-decoration: none;
    outline: none;

`;

export const ErrorMessage = styled.p`
    color: red;
`;

