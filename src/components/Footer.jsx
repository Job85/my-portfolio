import React from 'react'
// import { Link } from 'react-router-dom'
import { FooterBox, FooterContainer, FooterLink } from './ComopnentStyles';
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
const Footer = () => {

    return (
        <FooterBox>
            <FooterContainer>
                <div>
                    <h1>Social Links</h1>
                    <FooterLink href='https://github.com/Job85' target='_blank'>
                        <i className='FaGithubSquare'>
                            <span><AiFillGithub size={32} /></span>
                        </i>
                    </FooterLink>
                    <FooterLink href='https://www.linkedin.com/in/julian-jernigan813/' target='_blank'>
                        <i className='linkedin'>
                            <span><BsLinkedin size={32} /></span>
                        </i>
                    </FooterLink>
                </div>
            </FooterContainer>
        </FooterBox>
    )

}

export default Footer