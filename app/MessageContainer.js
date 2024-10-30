'use client';

import { useRef, useEffect, useMemo } from 'react';
import { Box } from '@mui/material';

import MessageItem from './MessageItem';

const MessageContainer = (props) => {
  const { messages } = props;

  const messageSectionRef = useRef(null);
  const initLastMessageRef = useRef(messages[messages.length - 1]);

  const lastMessage = useMemo(() => messages[messages.length - 1], [messages]);

  useEffect(() => {
    messageSectionRef.current.scrollTop = messageSectionRef.current.scrollHeight;
  }, []);

  useEffect(() => {
    if (initLastMessageRef.current !== lastMessage) {
      messageSectionRef.current.scrollTop = messageSectionRef.current.scrollHeight;
    }
  }, [lastMessage]);

  return (
    <Box height="100%" sx={{ overflowY: "scroll" }} ref={messageSectionRef}>
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
