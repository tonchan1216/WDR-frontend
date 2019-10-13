import React from 'react';
import styled from 'styled-components';

const SkillItem = ({ name }) => (
  <Article className="skill__item col-lg-3 col-md-4 col-sm-6">
    <Name className="skill__name">{name}</Name>
    <Stamp className="skill__stamp">
      <a href="https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started">
        STAMP
      </a>
    </Stamp>
  </Article>
);

const Article = styled.article`
  padding: 10px;
  background: #d9ffff;
  flex-direction: column;
  justify-content: space-around;
  :nth-child(even) {
    background: #00cccc;
  }
`;

const Name = styled.h3`
  text-align: center;
`;

const Stamp = styled.h3`
  text-align: center;
  a {
    color: #c20000;
  }
`;

export default SkillItem;
