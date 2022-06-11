import React from "react";
import { NavLink } from "react-router-dom";
import { NavBox, NavBarContainer, NavUl, NavLink2, links, linkStyle } from "./ComponentStyles2";

const Nav = () => {

    return (
        <NavBox>
            <NavBarContainer>
                <NavUl>
                    {links.map((link, index) => (
                        <NavLink key={index} to={link.path}>
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
            </NavBarContainer>
        </NavBox>
    )
}

export default Nav