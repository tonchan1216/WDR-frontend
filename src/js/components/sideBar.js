import React from 'react';

const SideBar = props => {
  const { news, inputText } = props;
  const { addSkill, changeText } = props;
  return (
    <aside className="side-bar col-md-3 row">
      <section className="news col-md-12 col-sm-6">
        <h3 className="news__title">Weather News</h3>
        <p className="news__contents">{news}</p>
      </section>

      <section className="add-skill col-md-12 col-sm-6">
        <h3 className="add-skill__title">Add Skill</h3>
        <p className="add-skill__form">
          <input
            className="add-skill__textbox"
            type="text"
            name="title"
            value={inputText}
            onChange={event => changeText(event.target.value)}
          />
          <input
            className="add-skill__button"
            type="button"
            value="Add"
            onClick={() => (inputText ? addSkill(inputText) : null)}
          />
        </p>
      </section>
    </aside>
  );
};

export default SideBar;
