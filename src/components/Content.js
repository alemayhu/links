import styled from 'styled-components'

import Link from './Link';

const ContentTitle = styled.h2`
text-align: center;
font-size: 32px;
`

const Content = ({ links }) => {
        return (
                <div>
                        {Object.keys(links).map((name) => <section key={name}>
                                <ContentTitle>{name}</ContentTitle>
                                {links[name].map(l => <Link {...l} key={l.title} />)}
                        </section>
                        )}
                </div>

        );
};

export default Content;