import styled from 'styled-components';


export const Box = styled.div`
    padding: 80px 60px;
    background: black;
    position: absolute;
    bottom: 0;
    width: 100%;

    @media (mad-width: 1000px) {
        padding: 70 px 30px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    mad-width: 1000px;
    margin: 0 auto;
`

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decorations: none;

&:hover {
    color: green;
    transition: 200ms ease-in;
}
`;