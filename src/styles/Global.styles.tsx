import { createGlobalStyle } from "styled-components";

import GentyRegularTTF from "../fonts/Genty-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Genty';
        src: local('Genty'), local('Genty'),
        url(${GentyRegularTTF}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    body {
        margin: 0;
        background-color: ${({theme}) => theme.colors.neutral.grey};
    }
`;

export { GlobalStyle };
