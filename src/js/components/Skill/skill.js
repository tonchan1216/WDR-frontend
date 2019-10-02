import React from 'react';
import SkillItem from './SkillItem';

const Skill = ({ skill, page }) => {
  const activeItems = skill[page];
  return (
    <section className="skill skill_active col-md-9 row">
      {activeItems.map(item => (
        <SkillItem key={`item-${item}`} name={item} />
      ))}
    </section>
  );
};

export default Skill;
