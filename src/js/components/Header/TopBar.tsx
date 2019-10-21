/* eslint-disable prettier/prettier */
import * as React from 'react';
import styled from 'styled-components';
import { _togglePage } from '../../Types';

type Props = {
  page: string,
  name: string,
  bar: string,
  togglePage: _togglePage
}

const TopBar: React.FC<Props> = (props) => {
  const { page, name, togglePage, bar } = props;
  const status = page === bar ? 'active' : 'inactive';

  return (
    <Title className={`top-bar__item top-bar__item_${status} col-sm-6`} status={status}>
      <Button
        type="button"
        className={`top-bar__link top-bar__link_${bar}`}
        onClick={() => togglePage(bar)}
      >
        {name}
      </Button>
    </Title>
  );
};

const Title = styled.h2<{status: string}>`
  margin: 0;
  padding: 20px 0;
  text-align: center;
  background-color: ${({status}) => (status === 'active' ? '#ffffd9' : 'white')};
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
