import { Box } from '@mui/material';

import MessageItem from './MessageItem';
import { messageList } from '@/mockData/chatroomMessage';

const MessageContainer = (props) => {
  const { roomId } = props;

  const messages = messageList.filter((message) => message.chatroomId === roomId);

  return (
    <Box>
      {messages.map((messageItem) => (
        <MessageItem
          key={messageItem.id}
          message={messageItem.message}
          senderId={messageItem.userId}
        />
      ))}
    </Box>
  );
};

export default MessageContainer;
