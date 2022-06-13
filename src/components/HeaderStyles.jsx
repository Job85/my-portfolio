import styled from "styled-components";

export const HeaderBox = styled.header`
    grid-area: header;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 1em;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }

`

export const HeaderContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImageContainer = styled.div`
    height: 40vh;
    width: 20vw;
    margin-left: 7em;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    box-sizing: border-box;
    display: inline;
    width: 85%;
    height: 85%;
    border-radius: 35%;
    box-shadow: 2px 2px #008000cc, 0.4em -0.5em #008000cc;
`