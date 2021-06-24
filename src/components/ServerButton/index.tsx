import React from 'react';

import Logo from '../../assets/images/logo.svg'

import { Button } from './styles';

export interface Props {
  isHome?: boolean;
  selected?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button 
      hasNotifications={hasNotifications} 
      mentions={mentions} 
      isHome={isHome} 
      className={selected ? 'active' : ''}
    >
      {isHome ? <img src={Logo} alt="Kaori Scan Logo"/> : ''}
    </Button>
  );
};

export default ServerButton;