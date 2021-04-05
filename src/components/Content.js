import Link from './Link';

const Content = ({ links }) => {
        return (
                <div>
                        {Object.keys(links).map((name) => <details key={name} open>
                                <summary>{name}</summary>
                                {links[name].map(l => <Link {...l} key={l.title} />)}
                        </details>
                        )}
                </div>

        );
};

export default Content;