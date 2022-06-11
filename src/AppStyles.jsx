import styled from 'styled-components';

export const AppDiv = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template: 1fr 5fr 1fr / 1fr 4fr;
    gap: 10px;
    grid-template-areas: 
        'header social'
        'nav main'
        'footer footer'
    ;
`

export const Main = styled.main`
    height: 100vh;
    width: 100vh;
    grid-area: main;
    display: flex;
    flex-direction: column;
`