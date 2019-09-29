import React from 'react';

const SkillItem = ({ name }) => (
  <article className="skill__item col-lg-3 col-md-4 col-sm-6">
    <h3 className="skill__name">{name}</h3>
    <p className="skill__stamp">
      <a href="https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started">
        STAMP
      </a>
    </p>
  </article>
);

export default SkillItem;
