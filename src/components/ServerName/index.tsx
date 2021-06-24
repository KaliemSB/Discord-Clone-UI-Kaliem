import React from 'react';
import { Container, Title, ExpandIcon } from './styles';
import ExpandMore from '../../assets/images/expand_more_black_24dp.svg'

const ServerName: React.FC = () => {
  return (
    <Container>
      <Title>Servidor do Kaliem</Title>
      <ExpandIcon>
        <img src={ExpandMore} alt="Expand Icon"/>
      </ExpandIcon>
    </Container>
  );
}

export default ServerName;