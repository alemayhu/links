import styled from 'styled-components';
import React from 'react';

import Avatar from './Avatar';

const StyledHeader = styled.header`
padding-top: 2rem;
`;

const Title = styled.h1`
        font-size: 16px;
`

const Header = () => {
        return (
                <StyledHeader>
                        <Avatar />
                        <Title>Alexander Alemayhu</Title>
                </StyledHeader>
        );
};

export default Header;