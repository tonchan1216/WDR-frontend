import React from 'react';
import styled from 'styled-components';

const SideBar = props => {
  const { news, inputText } = props;
  const { addSkill, changeText } = props;
  return (
    <Side className="side-bar col-md-3 row">
      <section className="news col-md-12 col-sm-6">
        <h3 className="news__title">Weather News</h3>
        <p className="news__contents">{news}</p>
      </section>

      <section className="add-skill col-md-12 col-sm-6">
        <h3 className="add-skill__title">Add Skill</h3>
        <p className="add-skill__form">
          <label htmlFor="skill_textbox">
            Type:
            <input
              id="skill_textbox"
              className="add-skill__textbox"
              type="text"
              name="title"
              value={inputText}
              onChange={event => changeText(event.target.value)}
            />
          </label>
          <label htmlFor="skill_button">
            Click:
            <input
              id="skill_button"
              className="add-skill__button"
              type="button"
              value="Add"
              onClick={() => addSkill()}
            />
          </label>
        </p>
      </section>
    </Side>
  );
};

const Side = styled.aside`
  padding: 10px 30px;
  margin: 0% 10px;
`;

export default SideBar;
