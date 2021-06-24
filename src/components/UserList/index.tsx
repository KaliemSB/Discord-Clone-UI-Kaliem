import React from 'react';
import { Container, User, Role, Avatar } from './styles';

interface UserProps {
  nickname: string;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
}) => {
  return (
    <User>
      <Avatar />

      <strong>{nickname}</strong>
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Kaliem" />

      <Role> Offline - 1</Role>
      <UserRow nickname="Kiffaz" />
    </Container>
  );
}

export default UserList;