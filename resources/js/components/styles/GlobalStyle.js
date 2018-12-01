import React, { Component } from 'react';
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
    body {
        font-size: 14px;
        font-family: "Ubuntu", mono;
    }
`;

export default GlobalStyle;