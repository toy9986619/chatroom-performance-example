'use client';

import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const InputBar = () => {
  return (
    <Box display="flex" height="100%" alignItems="center" padding={(theme) => theme.spacing(1)}>
      <Box flex={1} minHeight={0}>
        <TextField
          id="message"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box margin={(theme) => theme.spacing(0, 1)} height="100%">
        <Button variant="contained" sx={{ height: '100%' }}>
          <SendIcon />
        </Button>
      </Box>
    </Box >
  );
};

export default InputBar;
