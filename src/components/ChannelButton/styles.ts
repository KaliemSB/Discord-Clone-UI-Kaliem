import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white)
    }
  }
`;

export const HashtagIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const InviteIcon = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  transition: color .2s;

  &:hover {
    fill: var(--white);
  }
`;

export const SettingsIcon = styled.div`
  display: flex;
  align-items: center;

  margin-left: 4px;

  cursor: pointer;

  transition: color .2s;

  &:hover {
    fill: var(--white);
  }
`;
