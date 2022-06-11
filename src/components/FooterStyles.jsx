import styled from 'styled-components'

export const FooterBox = styled.footer`
    grid-area: footer;
    background-color: black;
    min-height: 30vh;
    position: relative;
    bottom: 0;
    right: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 1em;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }

`