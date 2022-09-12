import styled from 'styled-components';

export const AppDiv = styled.div`
    background-color: aquamarine;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template: repeat(5/ 5,  20%);
    grid-template-areas: 
        'nav header header header social'
        'main main main main main'
        'footer footer footer footer footer'
    ;
`

export const Main = styled.main`
    grid-area: main;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    @media (max-width: 1000px) {
        padding: 4.3rem 1.8rem;
    }
`