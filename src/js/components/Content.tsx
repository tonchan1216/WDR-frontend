import * as React from 'react';
import SideBar from './SideBar';
import Skill from './Skill/Skill';
import { _Skill, _addSkill, _changeText } from '../Types';

type Props = {
  skill: _Skill,
  page: string,
  news: string,
  inputText: string,
  addSkill: _addSkill,
  changeText: _changeText
}

const Content: React.FC<Props> = (props) => {
  const {skill, page, addSkill, changeText, news, inputText} = props;
  return(
    <section className="main row">
      <Skill skill={skill} page={page} />
      <SideBar
        addSkill={addSkill}
        changeText={changeText}
        news={news}
        inputText={inputText}
      />
    </section>
  )
};

export default Content;
