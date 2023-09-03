import { Link } from "gatsby";
import React from "react";
import { menu } from "../constants/menu";
import HeaderStyles from '../styles/HeaderStyles'

function Header() {
    return (
        <HeaderStyles>
            <div className="container">
                <div className="logo">Logo</div>
                <div className="nav-wrapper">
                    <nav>
                        <ul>
                            {menu.map(item => (
                                <li key={item.path}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderStyles>
    )
}

export default Header