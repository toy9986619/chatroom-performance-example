import { Box } from '@mui/material';

import RoomList from './RoomList';
import Chatroom from './Chatroom';

export default function Home() {

  const roomList = (
    <RoomList />
  );

  const chatroom = (
    <Chatroom />
  );

  return (
    <Box height="100%" width="100%" display="flex">
      <Box flex={1}>
        {roomList}
      </Box>
      <Box flex={5}>
        {chatroom}
      </Box>
    </Box>
  );
}
