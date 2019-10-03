import React from 'react';

import SideBar from './SideBar';
import Skill from './Skill/Skill';

const Content = ({ skill, page, news, inputText, addSkill, changeText }) => (
  <section className="main row">
    <Skill skill={skill} page={page} />
    <SideBar
      addSkill={addSkill}
      changeText={changeText}
      news={news}
      inputText={inputText}
    />
  </section>
);

export default Content;
