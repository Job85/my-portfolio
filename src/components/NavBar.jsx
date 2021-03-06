import React from "react";
import { NavLink } from "react-router-dom";
import { NavBox, NavBarContainer, NavUl, Ul, NavLink2, links } from "./NavBarStyles";

const NavBar = () => {

    return (
        <NavBox>
            <NavBarContainer>
                <NavUl>
                    {links.map((link, index) => (
                        <NavLink key={index} to={link.path}>
                            <Ul className="nav">{link.name}</Ul>
                        </NavLink>
                    ))}
                    <NavLink2
                        href='https://docs.google.com/document/d/e/2PACX-1vSiBcnyO1rayLM3WTUw2zhnm5lqbf3cd5wkEdOO3V1gzI2n8FyTaSRQ1wl8E-XH3GhEvEE2c9FnOLAl/pub'
                        target='_blank'
                        className="nav"
                    >
                        Resume
                    </NavLink2>
                </NavUl>
            </NavBarContainer>
        </NavBox>
    )
}

export default NavBar