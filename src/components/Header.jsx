import React from 'react'
// import { Link } from 'react-router-dom'
// import pic from '../HeadShot.jpeg'
import { NavBox, NavContainer, NavLink } from './ComopnentStyles'
const Header = () => {

    return (
        <NavBox>
            <NavContainer>
                <div className='nav'>
                    {/* <nav className='navbar'> */}
                    <div>
                        <NavLink href='http://localhost:3000/projects'>
                            <i className='projects'>
                                <span>Projects</span>
                            </i>
                        </NavLink>
                        <NavLink to='about'>About</NavLink>
                        <a href='https://docs.google.com/document/d/e/2PACX-1vSiBcnyO1rayLM3WTUw2zhnm5lqbf3cd5wkEdOO3V1gzI2n8FyTaSRQ1wl8E-XH3GhEvEE2c9FnOLAl/pub' target='_blank'>Resume</a>
                    </div>
                    {/* </nav> */}
                </div>
            </NavContainer>
        </NavBox>
    )
}

export default Header