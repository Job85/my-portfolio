import styled from 'styled-components';

export const Div = styled.div`
    margin-top: 8.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10.75rem;
    padding-right: 10.75rem;
    font-size: calc(0.6rem + 1vw);
    @media screen {
        min-width: 37.5rem
    }
`

export const Paragraph = styled.p`
    margin-top: 3.125rem;
    margin-bottom: 1.25rem;
`

export const Img2 = styled.img`
    box-sizing: border-box;
    display: inline;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 2%;
`

export const Para = styled.p`
    font-size: 1em;
`