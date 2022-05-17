import React from 'react'
// import { Link } from 'react-router-dom'
import { Box, Container, FooterLink } from './FooterStyles';

const Footer = () => {

    return (
        <Box>
            <Container>
                <div>
                    <h1>Social Links</h1>
                    <FooterLink href='https://github.com/Job85'>
                        <i className='FaGithubSquare'>
                            <span>GitHub</span>
                        </i>
                    </FooterLink>
                    <FooterLink href='https://www.linkedin.com/in/julian-jernigan813/'>
                        <i className='linkedin'>
                            <span>LinkedIn</span>
                        </i>
                    </FooterLink>
                </div>
            </Container>
        </Box>
    )

}

export default Footer