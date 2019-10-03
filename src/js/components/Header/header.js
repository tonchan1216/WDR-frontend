import React from 'react';
import TopBar from './TopBar';

const Header = ({ page, togglePage }) => (
  <header className="header">
    <h1 className="header__title">Frontend Developer Roadmap スタンプラリー</h1>
    <nav className="top-bar row">
      <TopBar
        page="front"
        name="フロントエンド"
        status={page === 'front' ? 'active' : 'inactive'}
        togglePage={togglePage}
      />
      <TopBar
        page="back"
        name="バックエンド"
        status={page === 'back' ? 'active' : 'inactive'}
        togglePage={togglePage}
      />
    </nav>
  </header>
);

export default Header;
