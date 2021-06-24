import React from 'react';
import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="21px" viewBox="0 0 24 24" width="21px" fill="#74777a"><g><rect fill="none" height="21" width="21"/></g><g><g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/></g></g></svg>
        </AddCategoryIcon>
      </Category>

      <ChannelButton channelName="chat-livre"></ChannelButton>
    </Container>
  );
}

export default ChannelList;