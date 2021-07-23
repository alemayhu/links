import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';

const StyledHeader = styled.header`
  padding-top: 2rem;

  h1 {
    font-size: 16px;
  }
`;

const Header = () => {
        return (
                <StyledHeader>
                        <Avatar />
                        <h1>Alexander Alemayhu</h1>
                </StyledHeader>
        );
};

export default Header;