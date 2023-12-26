import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  p {
    color: white;
    a {
      text-decoration: none;
      font-weight: bold;
      color: white;
    }
  }
  margin-top: auto;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © <a href="https://alemayhu.com">Alexander Alemayhu</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
