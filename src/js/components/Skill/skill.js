import React from 'react';
import SkillItem from './skillItem';

const Skill = ({ items, status }) => {
  const activeItems = status.front === 'active' ? items.front : items.back;
  return (
    <section className="skill skill_active col-md-9 row">
      {activeItems.map(item => (
        <SkillItem key={`item-${item}`} name={item} />
      ))}
    </section>
  );
};

export default Skill;
