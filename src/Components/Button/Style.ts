import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .button{
        cursor: pointer;
        width: 11em;
        height: 3em;
        background-color: #917696;
        border: none;
        border-radius: 5px;
        border-bottom: 5px solid #735e77;
        font-size: 1.2em;
        color: #fff;
    }

    .down{
        border: none;
        margin-top: 0.1em;
        height: 2.9em;
    }
`

export default Container