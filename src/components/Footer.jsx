import React from 'react'
// import { Link } from 'react-router-dom'
import { FooterBox, FooterContainer, FooterLink } from './ComopnentStyles';

const Footer = () => {

    return (
        <FooterBox>
            <FooterContainer>
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
            </FooterContainer>
        </FooterBox>
    )

}

export default Footer