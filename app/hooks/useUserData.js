import { useRef, useCallback, useState, useEffect } from 'react';
import { userMapDataController } from '@/mockData/user';

const useUserData = () => {
  const [updateAt, setUpdateAt] = useState(0);
  const subscriberSetRef = useRef(new Set());

  const updateHandler = useCallback((event) => {
    setUpdateAt(new Date().getTime());
  }, []);

  const getUserDataById = useCallback((id) => {
    const userData = userMapDataController.getUserDataById(id);

    if (!subscriberSetRef.current.has(id) && typeof document !== 'undefined') {
      subscriberSetRef.current.add(id);

      document.addEventListener(userMapDataController.getUpdateUserEventName(id), updateHandler);
    }

    return userData;
  }, [updateHandler]);

  useEffect(() => {
    const snapShotSetValue = Array.from(subscriberSetRef.current);

    return () => {
      snapShotSetValue.forEach((id) => {
        document.removeEventListener(userMapDataController.getUpdateUserEventName(id), updateHandler);
      });
    }
  }, [updateHandler]);

  return {
    updateAt,
    getUserDataById,
  };
};

export default useUserData;
