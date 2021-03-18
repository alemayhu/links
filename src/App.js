import styled, { createGlobalStyle } from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header'
import Link from './components/Link'

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
`

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

function App() {
  return (
    <Page>
      <GlobalStyle />
      <Header />
      <div>
        {links.map((l) => <Link {...l} />)}
      </div>
      <Footer />
    </Page>
  );
}

export default App;
