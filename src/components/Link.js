import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  div {
    padding: 1rem;
    width: 280px;
    text-align: center;
    margin: 1rem;
    border-radius: 36px;

    pointer-events: auto;
    background: white;
    font-weight: bold;
    border: 3px solid transparent;

    &:hover {
      border: 3px solid black;
    }
  }
`;

const Link = ({ link, title }) => {
  return (
    <StyledLink target="_blank" rel="noreferrer" href={link}>
      <div>{title}</div>
    </StyledLink>
  );
};

export default Link;