'use client';

import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import { useUserDataContext } from './UserDataProvider';

const MessageItem = (props) => {
  const { message, senderId } = props;

  const { users } = useUserDataContext();

  const sender = users[senderId];

  const avatar = (
    <Box
      borderRadius="50%"
      width="2.5rem"
      height="2.5rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={(theme) => theme.palette.primary.dark}
    >
      <PersonIcon />
    </Box>
  );

  return (
    <Box display="flex" alignItems="center" padding={(theme) => theme.spacing(0.5, 0)}>
      <Box padding={(theme) => theme.spacing(0, 1)}>
        {avatar}
      </Box>
      <Box flex={1} minWidth={0}>
        <Box>
          <Typography variant="subtitle2">
            {sender.name}
          </Typography>
        </Box>
        <Box>
          <Typography>
            {message}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageItem;