import {createGlobalStyle} from 'styled-components';
import NunitoRegular from './fonts/Nunito-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --violet: #a503fc;
        --white: #fff;
        --black: #000;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --magenta: #ff00ff;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    @font-face {
        font-family: 'Nunito', sans-serif;
        src: local('Nunito'), local('Nunito'),
        url(${NunitoRegular}) format('ttf'),
        url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;1,200&display=swap') format('ttf');
        font-weight: 400;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 3rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1.1rem;
        }

        a {
            text-decoration: none;
            color: var(--white);
        }
    }
`;


