import React from 'react'
import pic from '../images/mypic.jpeg'
import { HeaderBox, ImageContainer, Img } from './ComponentStyles2'


const Header = () => {

    return (
        <HeaderBox>
            <ImageContainer className='image-container'>
                <Img src={pic} alt="Julian" />
                <p>Julian Jernigan</p>
            </ImageContainer>
        </HeaderBox>
    )
}

export default Header