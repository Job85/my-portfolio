import styled from 'styled-components';

export const SocialBox = styled.div`
    grid-area: social;
    box-sizing: border-box;
    padding-top: 2rem;
    text-align: right;
    backbround: black;
    position: relative;
    top: 0;
    right: 0;
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