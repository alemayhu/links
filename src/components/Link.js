import React from 'react';

import { linkWrapper, linkTitle } from "../styles/Link.module.scss";

const Link = ({ link, title }) => {
  return (
    <a className={linkWrapper} target="_blank" rel="noreferrer" href={link}>
      <div className={linkTitle}>{title}</div>
    </a>
  );
};

export default Link;