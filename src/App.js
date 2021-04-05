import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

import links from './links.json';
import "./styles/App.scss";
import { page } from "./styles/Page.module.scss";

function App() {
  return (
    < div className={page}>
      <Header />
      <Content links={links} />
      <Footer />
    </div>
  );
}

export default App;
