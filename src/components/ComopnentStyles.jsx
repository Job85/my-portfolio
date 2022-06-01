import styled from 'styled-components';
import cn from 'classnames'
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
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
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
    { name: 'Home', path: '/' },
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
    box-sizing: border-box;
    display: inline;
    object-fit: contain;
    width: 20%;
    height: 20%;
    border-radius: 35%;
    box-shadow: rgb(100 100 100) 2px 2px 2px 2px;
    transition: all 0.6s ease 0s;
`
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

export const NavBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw;
    margin: 0 auto;
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
export const ProjectContainer = styled.div`
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;    
`
export const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`