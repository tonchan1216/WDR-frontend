import * as React from 'react';
import SkillItem from './SkillItem';
import { _Skill } from '../../Types';

const Skill = ({ skill, page }: { skill: _Skill, page: string }) => {
  const activeItems = skill[page];
  return (
    <section className="skill col-md-9 row">
      {activeItems.map((item: string) => (
        <SkillItem key={`item-${item}`} name={item} />
      ))}
    </section>
  );
};

export default Skill;
