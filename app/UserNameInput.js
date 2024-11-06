'use client';

import { useState, useCallback } from 'react';
import { Box, TextField } from '@mui/material';

const UserNameInput = (props = {
  onSaveUserName: () => { },
  onCancel: () => { },
  defaultUserName: '',
}) => {
  const { onSaveUserName, onCancel, defaultUserName } = props;
  const [userName, setUserName] = useState(defaultUserName);

  const handleNameKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      onSaveUserName(userName);
    } else if (event.key === 'Escape') {
      onCancel();
    }
  }, [onCancel, onSaveUserName, userName]);

  const handleInputChange = useCallback((event) => {
    setUserName(event.target.value);
  }, []);

  return (
    <Box>
      <TextField
        size="small"
        value={userName}
        onChange={handleInputChange}
        onKeyDown={handleNameKeyDown}
        autoFocus
      />
    </Box>
  );
};

export default UserNameInput;
