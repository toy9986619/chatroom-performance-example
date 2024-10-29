import { Box } from '@mui/material';

import RoomList from './RoomList';
import Chatroom from './Chatroom';
import UserList from './UserList';

export default function Home() {

  const roomList = (
    <RoomList />
  );

  const chatroom = (
    <Chatroom />
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
