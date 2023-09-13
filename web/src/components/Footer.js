import React from 'react';
import { Link } from 'gatsby';
import { menu } from '../constants/menu';
import {FooterStyles} from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';
import { socialLinks } from '../constants/socialLinks';

function Footer() {
    return (
        <FooterStyles>
            <div className='container'>
                <Logo />
                <ParagraphText className="footer__text">
                    Anim exercitation culpa eu consectetur occaecat magna aute eiusmod nulla do do.
                </ParagraphText>
                <ul className="footer__menuList">
                    {menu.map((item) => (
                        <li key={item.path}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
                <ul className="footer__socialList">
                    {socialLinks.map((item)=> (
                        <li key={item.name}>
                            <a href={item.url}>{item.icon}</a>
                        </li>
                    ))}
                </ul>               
            </div>
        </FooterStyles>
    );
}

export default Footer;