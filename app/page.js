'use client';

import { useState, useCallback } from 'react';
import { Box } from '@mui/material';

import RoomList from './RoomList';
import Chatroom from './Chatroom';
import UserList from './UserList';

export default function Home() {
  const [selectedRoomId, setSelectedRoomId] = useState('roomId1');

  const handleSelectRoom = useCallback((roomId) => {
    setSelectedRoomId(roomId);
  }, []);

  const roomList = (
    <RoomList selectedRoomId={selectedRoomId} onSelectRoom={handleSelectRoom} />
  );

  const chatroom = (
    <Chatroom roomId={selectedRoomId} key={selectedRoomId} />
  );

  const userList = (
    <UserList />
  );

  return (
    <Box height="100%" width="100%" display="flex">
      <Box flex={1}>
        {roomList}
      </Box>
      <Box flex={4}>
        {chatroom}
      </Box>
      <Box flex={1}>
        {userList}
      </Box>
    </Box>
  );
}
