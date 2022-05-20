import React from 'react'
import { NavLink } from 'react-router-dom'
import pic from '../images/mypic.jpeg'
import { NavBox, ImageContainer, NavBarContainer, NavLink2, NavUl, links, Img } from './ComopnentStyles'
const Header = () => {

    return (
        <NavBox>
            <ImageContainer className='image-container'>
                <Img src={pic} alt="Julian" />
            </ImageContainer>
            <NavBarContainer>
                <div className='nav'>
                    <NavUl>
                        {links.map((link, index) => (
                            <NavLink key={index} to={link.path} exact activeClassName='current'>
                                <ul>{link.name}</ul>
                            </NavLink>
                        ))}
                        <NavLink2
                            href='https://docs.google.com/document/d/e/2PACX-1vSiBcnyO1rayLM3WTUw2zhnm5lqbf3cd5wkEdOO3V1gzI2n8FyTaSRQ1wl8E-XH3GhEvEE2c9FnOLAl/pub'
                            target='_blank'
                        >
                            Resume
                        </NavLink2>
                    </NavUl>
                </div>
            </NavBarContainer>
        </NavBox>
    )
}

export default Header