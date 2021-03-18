import styled from 'styled-components'
import React from 'react'

const FooterText = styled.p`
        color: white;
`
const FooterLink = styled.a`
        text-decoration: none;
        font-weight: bold;
        color: white;
`

const Footer = () => {
        return (
                <footer>
                        <FooterText>
                                ©  <FooterLink href="https://alemayhu.com">Alexander Alemayhu</FooterLink>
                        </FooterText>
                </footer>
        );
};

export default Footer;