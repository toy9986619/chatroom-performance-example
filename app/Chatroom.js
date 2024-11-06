'use client';

import { useState, useCallback, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Box } from '@mui/material';

import MessageContainer from './MessageContainer';
import InputBar from './InputBar';
import { messageList } from '@/mockData/chatroomMessage';

const Chatroom = (props) => {
  const { roomId } = props;

  const [messages, setMessages] = useState(() => {
    return messageList.filter((message) => message.chatroomId === roomId);
  });
  const messageContainerRef = useRef(null);

  const handleSend = useCallback((message) => {
    const newMessage = {
      id: nanoid(),
      chatroomId: roomId,
      message,
      userId: 'userId1',
      createAt: new Date().toISOString(),
    };

    setMessages((prevMessages) => {
      return [...prevMessages, newMessage];
    });
    messageList.push(newMessage);
  }, [roomId]);

  return (
    <Box height="100%" display="flex" flexDirection="column" minHeight={0}>
      <Box flex={1} minHeight={0} border="1px solid">
        <MessageContainer
          key="roomId1"
          messages={messages}
          ref={messageContainerRef}
        />
      </Box>
      <Box height={72} border="1px solid">
        <InputBar onSend={handleSend} />
      </Box>
    </Box>
  );
}

export default Chatroom;
