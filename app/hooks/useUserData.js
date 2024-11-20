import { useRef, useCallback, useState, useEffect } from 'react';
import { userMapDataController } from '@/mockData/user';

const useUserData = () => {
  const [updateAt, setUpdateAt] = useState(0);
  const subscriberSetRef = useRef(new Set());
  const listenerSetRef = useRef(new Set());

  const updateHandler = useCallback((event) => {
    setUpdateAt(new Date().getTime());
  }, []);

  const getUserDataById = useCallback((id) => {
    const userData = userMapDataController.getUserDataById(id);

    if (!subscriberSetRef.current.has(id) && typeof document !== 'undefined') {
      subscriberSetRef.current.add(id);
      document.addEventListener(userMapDataController.getUpdateUserEventName(id), updateHandler);
      listenerSetRef.current.add(id);
    }

    return userData;
  }, [updateHandler]);

  useEffect(() => {
    // re-set listener when react strict mode exec twice

    const snapShotSetValue = Array.from(subscriberSetRef.current);

    snapShotSetValue.forEach((id) => {
      if (!listenerSetRef.current.has(id) && typeof document !== 'undefined') {
        document.addEventListener(userMapDataController.getUpdateUserEventName(id), updateHandler);
        listenerSetRef.current.add(id);
      }
    });

    return () => {
      const listenerSetValue = Array.from(listenerSetRef.current);

      listenerSetValue.forEach((id) => {
        document.removeEventListener(userMapDataController.getUpdateUserEventName(id), updateHandler);
        listenerSetRef.current.delete(id);
      });
    }
  }, [updateHandler]);

  return {
    updateAt,
    getUserDataById,
  };
};

export default useUserData;
