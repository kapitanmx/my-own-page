import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 60px 20px;
    p {
        font-size: 0.8rem;
    }
`;

export const FieldBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

export const StyledField = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 10px auto;
    padding: 20px 40px;
    border-radius: 40px;
    border: ${({error}) => (error ? '3px solid red' : '5px solid black')};
    outline: none;
`;

export const StyledTextArea = styled.textarea`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    padding: 20px 20px;
    width: 100%;
    height: 70%;
    border: ${({error}) => (error ? '3px solid red' : 'none')};
    border-radius: 20px;
    outline: none;
    @media screen and (max-width: 579px) {
        width: 80%;
    }
`;

export const StyledButton = styled.button`
    display: flex;
    background-color: #fff ;
    color: #000
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    padding: 20px 40px;
    border-radius: 40px;
    border: none;
    text-decoration: none;
    outline: none;
    transition: 0.5s ease-in-out;
    &:hover {
        background-color: #000;
        color: white;
        border: 3px solid white;
} 
`;

export const ErrorMessage = styled.p`
    color: red;
`;

