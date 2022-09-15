import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 20%;
    padding: 0 20px;
    @media screen and (max-width: 960px) {
        margin: 0 auto;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
`;