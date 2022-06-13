import styled from 'styled-components';

export const AppDiv = styled.div`
    background-color: aquamarine;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template: repeat(5/ 5,  20%);
    grid-template-areas: 
        'header header header header social'
        'nav nav nav main main'
        'footer footer footer footer footer'
    ;
`

export const Main = styled.main`
    grid-area: main;
    background-color: whitesmoke;
    display: flex;
    flex-direction: coloumn;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`