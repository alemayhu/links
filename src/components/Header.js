import React from 'react';
import Avatar from './Avatar';
import { header } from "../styles/Header.module.scss";

const Header = () => {
        return (
                <header className={header}>
                        <Avatar />
                        <h1>Alexander Alemayhu</h1>
                </header>
        );
};

export default Header;