import React from 'react';
import styled from 'styled-components';

import logo from '../avatar.jpeg';

const StyledImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50% 10%;
  background: blanchedalmond;
  pointer-events: none;
  object-fit: contain;
`;

const Avatar = () => {
        return (
                <StyledImage src={logo} className="App-logo" alt="logo" />
        );
};

export default Avatar;
