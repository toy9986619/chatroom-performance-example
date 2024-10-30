'use client';

import { createContext, useState, useCallback, useMemo, useContext } from 'react';
import { userMap } from '@/mockData/user';

export const UserDataContext = createContext({});
export const useUserDataContext = () => useContext(UserDataContext);

const UserDataProvider = (props) => {
  const [users, setUsers] = useState(userMap);

  const updateUserData = useCallback((eid, updater = () => { }) => {
    setUsers((prevUsers) => {
      const currentUser = prevUsers[eid];
      const newUsers = {
        ...prevUsers,
        [eid]: updater(currentUser),
      };
      return newUsers;
    });
  }, []);

  const contextValue = useMemo(() => ({
    users,
    updateUserData,
  }), [users, updateUserData]);

  return (
    <UserDataContext.Provider value={contextValue}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;