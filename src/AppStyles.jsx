import styled from 'styled-components';

export const AppDiv = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas: 
        'header header'
        'asideLeft main'
        'footer';
    grid-template-rows: 1fr 9fr 1fr;
    grid-template-columns: 1fr 6fr 1fr;
`

