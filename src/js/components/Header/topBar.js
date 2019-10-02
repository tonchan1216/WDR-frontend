import React from 'react';

const TopBar = props => {
  const { status, page, name, togglePage } = props;
  return (
    <h2 className={`top-bar__item top-bar__item_${status} col-sm-6`}>
      <button
        type="button"
        className={`top-bar__link top-bar__link_${page}`}
        onClick={() => togglePage(page)}
      >
        {name}
      </button>
    </h2>
  );
};

export default TopBar;
