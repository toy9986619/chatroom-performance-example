'use client';

import { useCallback } from 'react';
import { Box } from '@mui/material';

const RoomItem = (props) => {
  const { roomId = '', roomName, isSelected = false, onRoomClick = () => { } } = props;

  const handleRoomClick = useCallback(() => {
    onRoomClick(roomId);
  }, [onRoomClick, roomId]);

  return (
    <Box
      onClick={handleRoomClick}
      height={60}
      width="100%"
      display="flex"
      alignItems="center"
      border="1px solid"
      bgcolor={isSelected ? 'primary.main' : 'transparent'}
      padding={(theme) => theme.spacing(0, 2)}
    >
      <Box width="100%">
        {roomName}
      </Box>
    </Box>
  );
};

export default RoomItem;
