import React from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';

const Header = ({ page, togglePage }) => (
  <header className="header">
    <Title className="header__title">
      Frontend Developer Roadmap スタンプラリー
    </Title>
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

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  margin: 0;
  padding: 30px 0;
  color: #00539f;
  animation: fadeInTitle 3s ease-in;
`;

export default Header;
