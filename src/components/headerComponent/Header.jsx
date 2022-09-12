import React from 'react'
import pic from '../../images/mypic.jpeg'
import { HeaderBox, HeaderContainer, ImageContainer, Img } from './HeaderStyles'

const Header = () => {

    return (
        <HeaderBox>
            <HeaderContainer>
                <ImageContainer className='image-container'>
                    <Img src={pic} alt="Julian" />
                </ImageContainer>
                <h5>Julian Jernigan</h5>
            </HeaderContainer>
        </HeaderBox>
    )
}

export default Header