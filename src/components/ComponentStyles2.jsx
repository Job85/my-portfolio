import styled from "styled-components";

export const HeaderBox = styled.header`
    background-color: black;
    min-height: 30vh;
    position: relative;
    top: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 1em;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }

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
`

export const NavBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw;
    margin: 0 auto;
`

export const NavUl = styled.ul`
    display: flex;
    flex-direction: column;
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
}
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

export const links = [
    // { name: 'Home', path: '/' },
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    // {
    //     name: 'Resume', path: href = 'https://docs.google.com/document/d/e/2PACX-1vSiBcnyO1rayLM3WTUw2zhnm5lqbf3cd5wkEdOO3V1gzI2n8FyTaSRQ1wl8E-XH3GhEvEE2c9FnOLAl/pub' target='_blank'

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

export const ImageContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    align-items: center;
`

export const Img = styled.img`
    box-sizing: border-box;
    display: inline;
    object-fit: contain;
    width: 90%;
    height: 90%;
    border-radius: 35%;
    box-shadow: rgb(100 100 100) 2px 2px 2px 2px;
    transition: all 0.6s ease 0s;
`

export const SocialBox = styled.div`
    box-sizing: border-box;
    padding-top: 2rem;
    text-align: center;
    backbround: black;
    position: relative;
    bottom: 0;
    width: 100vw;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100vw;
    margin: 0 auto;
`

export const SocialLink = styled.a`
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
`

export const FooterBox = styled.footer`
    background-color: black;
    min-height: 30vh;
    position: relative;
    bottom: 0;
    right: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 1em;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }

`

export const Div = styled.h3`
     margin-top: 150px;
`

export const Paragraph = styled.p`
     margin-top: 50px;
     margin-bottom: 20px;
     min-height: 30vh;
     padding-left: 300px;
     padding-right: 300px
`