'use client';

import { useState, useCallback } from 'react';
import { Box } from '@mui/material';

import roomList from '@/mockData/room';
import RoomItem from './RoomItem';

const RoomList = (props) => {
  const { selectedRoomId = '', onSelectRoom = () => { } } = props;
  const [rooms, setRooms] = useState(roomList);

  const handleRoomClick = useCallback((roomId) => {
    onSelectRoom(roomId);
  }, [onSelectRoom]);

  return (
    <Box border="1px solid" height="100%">
      {rooms.map((room) => (
        <RoomItem
          key={room.id}
          roomId={room.id}
          onRoomClick={handleRoomClick}
          roomName={room.name}
          isSelected={selectedRoomId === room.id}
        />
      ))}
    </Box>
  );
};

export default RoomList;