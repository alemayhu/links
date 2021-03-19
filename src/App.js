import styled from 'styled-components';

import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';
import Header from './components/Header'
import Content from './components/Content'

import links from './links.json'

const Page = styled.div`
  text-align: center;
  background: linear-gradient(#5797f5, tomato) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  height: 100vh;
`
function App() {
  return (
    <Page>
      <GlobalStyle />
      <Header />
      <Content links={links} />
      <Footer />
    </Page>
  );
}

export default App;
