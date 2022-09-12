import React, { useState } from "react";
import styled, { css } from "styled-components";

const Card = ({ card }) => {

    const [flip, setFlip] = useState(false);

    return (

        <CardBox>
            <CardContainer>
                <FlipCard>
                    <CardInner className={flip ? 'flip' : ''}>
                        <CardFront className="front" onClick={() => setFlip(true)} >
                            {card.front}
                        </CardFront>
                        <CardBack className="back" onClick={() => setFlip(false)}>
                            {card.back}
                        </CardBack>
                    </CardInner>
                </FlipCard>
            </CardContainer>
        </CardBox>
    )
}

export default Card

const CardBox = styled.div`
    grid-area: main;
    background-color: #008000cc;

    @media (max-width: 1000px) {
        padding: 4.3rem 1.8rem;
    }
`

const CardContainer = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 4rem;
`

const FlipCard = styled.div`
    background-color: transparent;
    width: 80%;
    height: 80%;
    border: 0.49rem solid #008000cc;
    perspective: 1000px;
    cursor: pointer;
`

const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    flex: 1;
    display: flex;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &.flip {
        transform: rotateX(180deg)
    }
`

const CardSide = css`
    position: absolute;
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

const CardFront = styled.div`
    ${CardSide}
    height: 100%;
    z-index: 0;
    background-color: #bbb;
    color: black;
`

const CardBack = styled.div`
    ${CardSide}
    height: 100%;
    z-index: 1;
    background-color: maroon;
    color: white;
    transform: rotateX(180deg);
`