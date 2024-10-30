import { Box } from '@mui/material';

import MessageContainer from './MessageContainer';
import InputBar from './InputBar';

const Chatroom = () => {
  return (
    <Box height="100%" display="flex" flexDirection="column" minHeight={0}>
      <Box flex={1} minHeight={0} border="1px solid">
        <MessageContainer
          key="roomId1"
          roomId="roomId1"
        />
      </Box>
      <Box height={72} border="1px solid">
        <InputBar />
      </Box>
    </Box>
  );
}

export default Chatroom;
