import React from "react";
import styled from "styled-components";

const Div = styled.div`
    margin-top: 8.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10.75rem;
    padding-right: 10.75rem;
    font-size: calc(0.6rem + 1vw);
    color: white;
    border-color: green;

    @media screen {
        min-width: 37.5rem
    }
`
const H3 = styled.h3`
    color: #008000cc;
    font-size: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 
        0 1px 0 #ccc, 0 1.5px 0 #ccc,
        0 2px 0 #ccc, 0 2.5px 0 #ccc,
        0 3px 0 #ccc, 0 3.5px 0 #ccc,
        0 4px 0 #ccc, 0 4.5px 0 #ccc,
        0 20px 30px rgba(153, 255, 153, 5);
`
const Paragraph = styled.p`
    margin-top: 3.125rem;
    margin-bottom: 1.25rem;
    color: white;
`

const About = () => {

    return (
        <Div>
            <H3>
                Greetings, from sunny Florida!
            </H3>
            <Paragraph>
                I'm Julian, a Full-Stack Developer from the Tampa Bay Area. And I'm here to help your organization.
                Coming from a background in hospitality,
                particularly special events, I know what it means to work in cooperation with others. Likewise, I bring
                a
                "get to yes" philosophy when it comes to gratifying clients and satisfying thier needs. Creativity
                inspires
                me and drives me to find resourceful methods to challenges I face.
            </Paragraph>
        </Div>
    )
}


export default About