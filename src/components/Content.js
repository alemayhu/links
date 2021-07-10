import Link from './Link';

const Content = ({ links }) => {
        return (
                <div>
                        {Object.keys(links).map((name, index) => <details key={name} open={index === 0}>
                                <summary>{name}</summary>
                                {links[name].map(l => <Link {...l} key={l.title} />)}
                        </details>
                        )}
                </div>

        );
};

export default Content;