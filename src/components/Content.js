import styled from 'styled-components';
import Link from './Link';

const StyledParagraph = styled.p`
  max-width: 500px;
`;

const Content = ({ links }) => {
  return (
    <>
      <StyledParagraph>
        Hei there! Welcome to my links page. I hope you find what you are
        looking for below. If not feel free to contact me.
      </StyledParagraph>
      <div>
        {links.map((link) => (
          <Link {...link} key={link.title} />
        ))}
      </div>
    </>
  );
};

export default Content;
