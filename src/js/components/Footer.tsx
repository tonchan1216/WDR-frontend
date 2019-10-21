import * as React from 'react';
import styled from 'styled-components';


const Footer: React.FC = () => (
  <Foot className="footer">
    <Patent className="footer__patent">(c) 2019 tonchan1216</Patent>
  </Foot>
);

const Foot = styled.footer`
  background-color: #ffffd9;
  margin-right: -15px;
  margin-left: -15px;
`;

const Patent = styled.p`
  text-align: center;
  padding: 20px;
`;

export default Footer;
