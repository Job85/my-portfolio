import React from 'react'
import { NavLink } from 'react-router-dom'
import pic from '../images/mypic.jpeg'
import { HeaderBox, ImageContainer, Img, NavBox, NavBarContainer, NavUl, links, NavLink2, SocialBox, SocialContainer, SocialLink } from './ComponentStyles2'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

const Header = () => {

    return (
        <HeaderBox>
            <ImageContainer className='image-container'>
                <Img src={pic} alt="Julian" />
                <p>Julian Jernigan</p>
            </ImageContainer>
            <SocialBox>
                <SocialContainer>
                    <div>
                        <h6>Social Links</h6>
                        <SocialLink href='https://github.com/Job85' target='_blank'>
                            <i className='FaGithubSquare'>
                                <span><AiFillGithub size={32} /></span>
                            </i>
                        </SocialLink>
                        <SocialLink href='https://www.linkedin.com/in/julian-jernigan813/' target='_blank'>
                            <i className='linkedin'>
                                <span><BsLinkedin size={32} /></span>
                            </i>
                        </SocialLink>
                    </div>
                </SocialContainer>
            </SocialBox>
        </HeaderBox>
    )
}

export default Header