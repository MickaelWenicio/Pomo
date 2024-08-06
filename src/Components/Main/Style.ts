import styled from "styled-components";

const Container = styled.div`
    background-color: #f6edf7;
    width: 40%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgb(0,0,0,0.1);
    padding: 1em;

    .controllersDiv{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5em;
        gap: 5px;

        button{
            color: #625066;
            font-weight: 500;
            font-size: 1em;
            cursor: pointer;
            padding: 2px 5px;
            border: none;
            border-radius: 3px;
            background: none;

            &.selected{
                color: #fff;
                background-color: #917696;
            }
        }
    }
`;

export default Container;