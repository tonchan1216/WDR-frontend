/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const TopBar = props => {
  const { page, name, togglePage } = props;
  const status = page === 'front' ? 'active' : 'inactive';

  return (
    <Title className={`top-bar__item top-bar__item_${status} col-sm-6`} status={status}>
      <Button
        type="button"
        className={`top-bar__link top-bar__link_${page}`}
        onClick={() => togglePage(page)}
      >
        {name}
      </Button>
    </Title>
  );
};

const Title = styled.h2`
  margin: 0;
  padding: 20px 0;
  text-align: center;
  background-color: ${props => (props.status === 'active' ? '#ffffd9' : 'white')};
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  text-align: center;
  width: 100%;
  height: 120%;
  :hover { text-decoration: none; }
`;

export default TopBar;
