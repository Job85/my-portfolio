import styled from 'styled-components';

export const SocialBox = styled.div`
    grid-area: social;
    background-color: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
    `

export const SocialContainer = styled.div`
    display: flex;
    background-color: black;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100vw;
    margin: 0 auto;
    box-shadow: #008000cc 3px 1px 1px 3px;
`

export const SocialLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
        color: #008000cc;
        transition: 200ms ease-in;
    }
`