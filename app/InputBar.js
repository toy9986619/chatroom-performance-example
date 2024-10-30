'use client';

import { useState, useCallback } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const InputBar = (props) => {
  const { onSend = () => { } } = props;
  const [message, setMessage] = useState('');

  const handleInputChange = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const handleSend = useCallback(() => {
    onSend(message);
    setMessage('');
  }, [message, onSend]);

  const handleInputKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  }, [handleSend]);

  return (
    <Box display="flex" height="100%" alignItems="center" padding={(theme) => theme.spacing(1)}>
      <Box flex={1} minHeight={0}>
        <TextField
          id="message"
          variant="outlined"
          fullWidth
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          autoComplete="off"
          type="text"
        />
      </Box>
      <Box margin={(theme) => theme.spacing(0, 1)} height="100%">
        <Button variant="contained" sx={{ height: '100%' }} onClick={handleSend}>
          <SendIcon />
        </Button>
      </Box>
    </Box >
  );
};

export default InputBar;
