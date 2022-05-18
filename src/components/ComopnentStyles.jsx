import styled from 'styled-components';

// export const Box = styled.div`
//     width: ${(props) => props.width}
//     height: ${(props) => props.height};
//     background-color: ${(props) => props.backgroundColor};
//     bottom: ${(props) => props.bottom};
//     top: ${(props) => props.top};
//     position: ${(props) => props.position};
//     padding: ${(props) => props.padding};
//     border: ${(props) => props.border}
//     margin: ${(props) => props.margin};
//     display: ${(props) => props.display};
//     flex-direction: ${(props) => props.flexDirection};
//     justify-content: ${(props) => props.justifyContent};
//     font-size: ${(props) => props.fontSize};
//     color: ${(props) => props.color}


//     `

// export const Link = styled.link`
// &:active {
//     background-color: ${props.backgroundColor};
// }
// `



export const FooterBox = styled.div`
    padding: 80px 60px;
    background: black;
    position: absolute;
    bottom: 0;
    width: 100%;

    @media (mad-width: 1000px) {
        padding: 70 px 30px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    mad-width: 1000px;
    margin: 0 auto;
`;

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

export const NavBox = styled.div`
    padding: 80px 60px;
    background: black;
    position: absolute;
    top: 0;
    width: 100%;

    @media (mad-width: 1000px) {
        padding: 70 px 30px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    mad-width: 1000px;
    margin: 0 auto;
`;

export const NavLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decorations: none;

&:hover {
    color: green;
    transition: 200ms ease-in;
}
`;