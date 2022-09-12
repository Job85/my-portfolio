import styled from "styled-components";

export const CardBox = styled.div`
    grid-area: main;
    background-color: #008000cc;

    @media (max-width: 1000px) {
        padding: 4.3rem 1.8rem;
    }
`

export const ProjContainer = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 4rem;
`

export const FlipCard = styled.div`
    background-color: transparent;
    width: 80%;
    height: 80%;
    border: 0.49rem solid #008000cc;
    perspective: 1000px;
    cursor: pointer;
`

export const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    /* transform-style: preserve-3d; */
    transform: perspective(1000px) rotateX(var(--rotate-x, 0))
        translateX(var(--translate-x, 0));
`

export const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #bbb;
    color: black;
    /* transform: rotateX(180deg); */
`

export const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: maroon;
    color: white;
    transform: rotateX(180deg);
`