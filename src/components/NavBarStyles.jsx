import styled from "styled-components"

export const NavBox = styled.div`
    grid-area: nav;
    background: black;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`

export const NavBarContainer = styled.div`
    max-width: 100vw;
`


export const NavUl = styled.ul`
    display: grid;
    align-content: center;

    a {
        text-decoration: none;
        
        &:hover{
            color: #008000cc;
            transition: 200ms ease-in;
            box-shadow: #008000cc 0px 0px 1px 3px;

        }
    }

    a:link {
        color: white;
        margin-bottom: 20px;
        font-size: 18px;
        text-decoration: none;
    }
`

export const Ul = styled.ul`
    color: white;
    
    &:hover {
        color: #008000cc;
        transition: 200ms ease-in;
    }
`

export const NavLink2 = styled.a`
    color: #ffff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;   
`

export const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Projects2', path: '/projects2' }
]