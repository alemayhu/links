import logo from '../logo.png';
import React from 'react';

import "../styles/AvatarImage.module.scss";

const Avatar = () => {
        return (
                <img src={logo} className="App-logo" alt="logo" />
        );
};

export default Avatar;