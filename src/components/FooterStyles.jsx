import styled from 'styled-components'

export const FooterBox = styled.footer`
    grid-area: footer;
    background-color: black;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 1em;
    position: sticky;
    position: -webkit-sticky;
    bottom: 0;
    left: 0;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }

`

export const FooterContainer = styled.div`
    max-width: 100vw;
    color: #8080802e;
    display: flex;
    flex-direction: column;
    align-items: left;
    &:hover {
        border: solid #008000cc;
        color: #008000cc;
    }
`