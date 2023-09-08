import React from 'react';
import LogoStyles from '../styles/LogoStyles';
import { GrTechnology } from 'react-icons/gr'

function Logo() {
    return (
        <LogoStyles to='/'>
            <GrTechnology />            
        </LogoStyles>
    );
}

export default Logo;