import React from 'react';

const SideBar = props => {
  const { data } = props;
  const { addSkill, handleChange } = props;
  return (
    <aside className="side-bar col-md-3 row">
      <section className="news col-md-12 col-sm-6">
        <h3 className="news__title">Weather News</h3>
        <p className="news__contents">{data.news}</p>
      </section>

      <section className="add-skill col-md-12 col-sm-6">
        <h3 className="add-skill__title">Add Skill</h3>
        <p className="add-skill__form">
          <input
            className="add-skill__textbox"
            type="text"
            name="title"
            value={data.inputText}
            onChange={event => handleChange(event)}
          />
          <input
            className="add-skill__button"
            type="button"
            value="Add"
            onClick={() => addSkill()}
          />
        </p>
      </section>
    </aside>
  );
};

export default SideBar;
