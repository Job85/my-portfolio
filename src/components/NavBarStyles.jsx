import styled from "styled-components"

export const NavBox = styled.div`
    box-sizing: border-box;
    grid-area: nav;
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
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' }
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