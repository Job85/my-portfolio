import styled from 'styled-components'

export const FooterBox = styled.footer`
    grid-area: footer;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 1em;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }

`