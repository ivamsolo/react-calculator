import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @font-face {
        font-family: myFont;
        src: url(./fonts/digital-7.ttf);
    }

    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: black;
        font-family: myFont, monospace;
    }

    
`