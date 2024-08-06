import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    #root{
        width: 100vw;
        height: 100vh;
    }

    body{
        width: 100%;
        height: 100%;
        background-color: #ebdeed;
        position: relative;
    }

`

export default Global