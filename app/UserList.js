'use client';

import { useCallback, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import UserItem from './UserItem';
import { userMapDataController, UPDATE_USER_MAP_EVENT } from '@/mockData/user';

const UserList = () => {
  const [users, setUsers] = useState(userMapDataController.getUserData());

  const handleStatusChange = useCallback((id, status) => {
    const updater = (currentUser) => {
      return {
        ...currentUser,
        status,
      };
    };

    userMapDataController.updateUserData(id, updater);
  }, []);

  const handleSaveUserName = useCallback((id, name) => {
    const updater = (currentUser) => {
      return {
        ...currentUser,
        name,
      };
    };

    userMapDataController.updateUserData(id, updater);
  }, []);

  useEffect(() => {
    const updateHandler = () => {
      setUsers(userMapDataController.getUserData());
    };

    document.addEventListener(UPDATE_USER_MAP_EVENT, updateHandler);

    return () => {
      document.removeEventListener(UPDATE_USER_MAP_EVENT, updateHandler);
    };
  }, []);

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
