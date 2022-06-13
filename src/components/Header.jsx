import React from 'react'
import pic from '../images/mypic.jpeg'
import { HeaderBox, ImageContainer, Img } from './HeaderStyles'

const Header = () => {

    return (
        <HeaderBox>
            <ImageContainer className='image-container'>
                <Img src={pic} alt="Julian" />
                <h5>Julian Jernigan</h5>
            </ImageContainer>
        </HeaderBox>
    )
}

export default Header