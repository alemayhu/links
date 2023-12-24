import Link from './Link';

const Content = ({ links }) => {
  return (
    <div>
      {links.map((link) => (
        <Link {...link} key={link.title} />
      ))}
    </div>
  );
};

export default Content;
