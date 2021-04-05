import React from 'react';

import { footer, text, link } from "../styles/Footer.module.scss";

const Footer = () => {
        return (
                <footer className={footer}>
                        <p className={text}>
                                ©  <a className={link} href="https://alemayhu.com">Alexander Alemayhu</a>
                        </p>
                </footer>
        );
};

export default Footer;