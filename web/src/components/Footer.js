import React from 'react';
import {FooterStyles} from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
    return (
        <FooterStyles>
            <div className='container'>
                <Logo />
                <ParagraphText>
                    Anim exercitation culpa eu consectetur occaecat magna aute eiusmod nulla do do.
                </ParagraphText>
            </div>
        </FooterStyles>
    );
}

export default Footer;