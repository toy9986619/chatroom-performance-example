'use client';

import { useCallback } from 'react';
import { Box } from '@mui/material';
import { useUserDataContext } from './UserDataProvider';
import UserItem from './UserItem';

const UserList = () => {
  const { users, updateUserData } = useUserDataContext();

  const handleStatusChange = useCallback((id, status) => {
    updateUserData(id, (user) => {
      return {
        ...user,
        status,
      };
    });
  }, [updateUserData]);

  const handleSaveUserName = useCallback((id, name) => {
    updateUserData(id, (user) => {
      return {
        ...user,
        name,
      };
    });
  }
  , [updateUserData]);

  return (
    <Box border="1px solid" height="100%">
      {Object.values(users).map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          status={user.status}
          onStatusChange={handleStatusChange}
          onSaveUserName={handleSaveUserName}
        />
      ))}
    </Box>
  );
};

export default UserList;
