import styled from "styled-components";

export const HeaderBox = styled.header`
    grid-area: header;
    background-color: black;
    min-height: 30vh;
    position: relative;
    top: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 1em;
    box-shadow: rgba(64, 255, 0, 0.75) 0px 3px 3px 3px;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }

`

export const ImageContainer = styled.div`
    align-items: center;
`

export const Img = styled.img`
    box-sizing: border-box;
    display: inline;
    object-fit: contain;
    width: 90%;
    height: 90%;
    border-radius: 35%;
    box-shadow: rgb(100 100 100) 2px 2px 2px 2px;
    transition: all 0.6s ease 0s;
`

export const Div = styled.h3`
     margin-top: 150px;
`

export const Paragraph = styled.p`
     margin-top: 50px;
     margin-bottom: 20px;
     min-height: 30vh;
     padding-left: 300px;
     padding-right: 300px
`