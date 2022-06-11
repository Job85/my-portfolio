import React from "react";
import { SocialBox, SocialContainer, SocialLink } from "./SocialStyles";
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

const Social = () => {

    return (
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
    )
}

export default Social