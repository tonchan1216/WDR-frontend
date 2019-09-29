import React from 'react';
import TopBar from './topBar';

const Header = ({ status, togglePages }) => (
  <header className="header">
    <h1 className="header__title">Frontend Developer Roadmap スタンプラリー</h1>
    <nav className="top-bar row">
      <TopBar
        tag="front"
        name="フロントエンド"
        status={status.front}
        togglePages={togglePages}
      />
      <TopBar
        tag="back"
        name="バックエンド"
        status={status.back}
        togglePages={togglePages}
      />
    </nav>
  </header>
);

export default Header;
