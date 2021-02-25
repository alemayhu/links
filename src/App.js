import logo from './logo.png';
import './App.css';

const links = [
  // Video / Live Stream
  { title: "YouTube", link: "https://youtube.com/c/alexanderalemayhu" },
  { title: "Twitch", link: "http://twitch.tv/alexanderalemayhu" },
  { title: 'Trovo', link: 'https://trovo.live/alexanderalemayhu'},
  { title: "AlemayhuVODS", link: "https://www.youtube.com/c/AlemayhuVODS" },
  
  { title: "Website", link: "https://alemayhu.com" },
  
  // Chat
  { title: "Telegram", link: "https://t.me/joinchat/TkdYqYimUj-lp7JD" },
  { title: "Tiktok", link: "https://www.tiktok.com/@alexanderalemayhu" },
  { title: "Twitter", link: "https://twitter.com/AAlemayhu" },
  { title: "Discord", link: "https://discord.gg/PSKC3uS" },
  
  // Support
  { title: 'SubscribeStar', link: 'https://www.subscribestar.com/alexanderalemayhu' },
  { title: "GitHub Sponsor", link: "http://github.com/sponsors/alemayhu" },
  { title: "Patreon", link: "https://www.patreon.com/alemayhu" },
  { title: "Buy me a coffee", link: "https://buymeacoffee.com/aalemayhu" },
  { title: "Tip", link: "https://streamlabs.com/alexanderalemayhu1" },
  { title: "Ko-Fi", link: "https://ko-fi.com/alemayhu" },
  { title: "Paypal", link: "https://paypal.me/alemayhu" },
  
  { title: "Amazon Wishlist", link: "https://www.amazon.com/hz/wishlist/ls/2R5BVQ3IWEDAC?ref_=wl_share" },
  
  // Projects
  { title: "Notion to Anki", link: 'https://2anki.net/' },
  { title: "GitHub", link: "https://github.com/aalemayhu" }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Alexander Alemayhu
        </p>
      </header>
      <div>
        {links.map((l) => <a  className="link-a" target="_blank" rel="noreferrer" href={l.link}><div className="link">{l.title}</div></a>)}
      </div>
      <footer>
        <p class="footer-text">
          ©  <a className="footer-link" href="https://alemayhu.com">Alexander Alemayhu</a>                              
        </p>
      </footer>
    </div>
  );
}

export default App;
