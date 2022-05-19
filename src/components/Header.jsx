import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import pic from '../images/mypic.jpeg'
import { NavBox, NavBarContainer, NavLink2, NavUl, links, Img } from './ComopnentStyles'
const Header = () => {

    return (
        <NavBox>
            <div>
                <Img src={pic} alt="Julian" height={300} width={300} />
            </div>
            <NavBarContainer>
                <div className='nav'>
                    <div>
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
                </div>
            </NavBarContainer>
        </NavBox>
    )
}

export default Header