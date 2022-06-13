import styled from "styled-components";

export const HeaderBox = styled.header`
    grid-area: header;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: calc(1.6rem + 2vmin);
    color: white;
    padding: 1rem;

    @media (max-width: 1000px) {
        padding: 4.3rem 1.8rem;
    }

`

export const HeaderContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-left: 7rem;
`

export const ImageContainer = styled.div`
    height: 10rem;
    width: 10rem;
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
    box-shadow: .125rem .125rem #008000cc, 0.4rem -0.5rem #008000cc;
`