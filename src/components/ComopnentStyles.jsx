import styled from 'styled-components';

// export const Box = styled.div`
//    width: ${(props) => props.width}; 
//    height: ${(props) => props.height};
//    background-color: ${(props) => props.backgroundColor};
//    bottom: ${(props) => props.bottom};
//    top: ${(props) => props.top};
//    position: ${(props) => props.position};
//    padding: ${(props) => props.padding};
//    border: ${(props) => props.border};
//    margin: ${(props) => props.margin};
//    display: ${(props) => props.display};
//    flex-direction: ${(props) => props.flexDirection};
//    justify-content: ${(props) => props.justifyContent};
//    font-size: ${(props) => props.fontSize};
//    color: ${(props) => props.color}

// `

// export const Link = styled.link`
// &:active {
//     background-color: ${props.backgroundColor};
// }
// `
// @font-face {
//     font-family: 'matrixFont';
//     src: url(./matrixFont.ttf);
//   }


export const FooterBox = styled.div`
    box-sizing: border-box;
    padding-top: 2rem;
    text-align: center;
    background: black;
    position: relative;
    bottom: 0;
    width: 100vw;

    @media (max-width: 1000px) {
        padding: 70 px 30px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100vw;
    margin: 0 auto;
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
    color: green;
    transition: 200ms ease-in;
}
`;

export const NavBox = styled.div`
    box-sizing: border-box;
    padding: 2rem;
    text-align: center;
    background: black;
    position: relative;
    top: 0;
    width: 100vw;

    @media (max-width: 1000px) {
        padding: 70 px 30px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100vw;
    margin: 0 auto;
`;

export const NavUl = styled.ul`
display: flex;
a {
    text-decoration: none;
}

ul {
    color: #fff;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
}

.current {
    ul {
        border-bottom: 2px solid green;
    }
}
`;

export const links = [
    // { name: 'Home', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    // {
    //     name: 'Resume', href: 'https://docs.google.com/document/d/e/2PACX-1vSiBcnyO1rayLM3WTUw2zhnm5lqbf3cd5wkEdOO3V1gzI2n8FyTaSRQ1wl8E-XH3GhEvEE2c9FnOLAl/pub',
    //     target: '_blank'
    // },
]

export const linkStyle = `
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
    color: green;
    transition: 200ms ease-in;
} 
`

export const Paragraph = styled.p`
    margin-top: 50px;
    margin-bottom: 20px;
    min-height: 30vh;
    padding-left: 300px;
    padding-right: 300px
`

export const Div = styled.h3`
    margin-top: 150px;
`

export const Img = styled.img`
    width: 6em;
    height: 6em;
    border-radius: 35%;
    box-shadow: rgb(100 100 100) 2px 2px 2px 2px;
    transition: all 0.6s ease 0s;
`
export const Img2 = styled.img`
    box-sizing: border-box;
    display: inline;
    width: 50%;
    height: 50%;
    object-fit: contain;
    border-radius: 2%;
`

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLink2 = styled.a`
    color: #ffff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    padding-left: 35px;

    &:hover{
        color: green;
        transition: 200ms ease-in
    }
`
