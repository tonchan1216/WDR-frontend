import * as React from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';
import { _togglePage } from '../../Types';


const Header: React.FC<{ page: string, togglePage: _togglePage }> = ({ page, togglePage }) => (
  <header className="header">
    <Title className="header__title">
      Frontend Developer Roadmap スタンプラリー
    </Title>
    <nav className="top-bar row">
      <TopBar
        page={page}
        bar="front"
        name="フロントエンド"
        togglePage={togglePage}
      />
      <TopBar
        page={page}
        bar="back"
        name="バックエンド"
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
