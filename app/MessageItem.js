'use client';

import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import { useUserDataContext } from './UserDataProvider';

const withMessageUser = (Component) => {
  const Wrapper = (props) => {
    const { senderId } = props;

    const { users } = useUserDataContext();

    const sender = users[senderId];

    return (
      <Component sender={sender} {...props} />
    )
  };

  Wrapper.displayName = `withMessageUser(${Component.displayName || Component.name})`;

  return Wrapper;
};

const MessageItem = (props) => {
  const { message, sender } = props;

  const isOnline = sender.status === 'online';

  const statusDot = (
    <Box
      position="absolute"
      sx={{ zIndex: 1, bottom: '7%', right: '7%' }}
      bgcolor={(theme) => {
        return isOnline ? theme.palette.success.main : theme.palette.grey.A700;
      }}
      height="0.5rem"
      width="0.5rem"
      borderRadius="50%"
      border="1px solid"
    />
  );

  const avatar = (
    <Box
      borderRadius="50%"
      width="2.5rem"
      height="2.5rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={(theme) => theme.palette.primary.dark}
      position="relative"
    >
      <PersonIcon />
      {statusDot}
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

export default withMessageUser(memo(MessageItem));