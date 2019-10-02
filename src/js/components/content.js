import React from 'react';

import SideBar from './SideBar';
import Skill from './Skill/Skill';

const Content = ({ skill, page, news, input_text, addSkill, changeText }) => (
  <section className="main row">
    <Skill skill={skill} page={page} />
    <SideBar
      addSkill={addSkill}
      changeText={changeText}
      news={news}
      input_text={input_text}
    />
  </section>
);

export default Content;
