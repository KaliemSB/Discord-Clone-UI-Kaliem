import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: var(--white);

    display: block;
  }

  > span {
    color: var(--gray);

    font-size: 13px;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 8px;
  }
`;
export const MicIcon = styled.div`
  display: flex;
  align-items: center;
  
  cursor: pointer;
`;

export const HeadPhoneIcon = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const SettingsIcon = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;