
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

import links from './links.json';

const Page = styled.div`
  text-align: center;
  font-size: calc(10px + 2vmin);
  align-items: center;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  header {
    flex-shrink: 0;
  }
  .content {
    display: block;
    flex: 1 0 auto;
    padding: 4rem;
  }

  footer {
    flex-shrink: 0;
  }
`;

function App() {
  return (
    <Page>
      <Header />
      <Content links={links} />
      <Footer />
    </Page>
  );
}

export default App;
