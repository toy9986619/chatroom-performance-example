export const userMap = {
  userId1: {
    id: 'userId1',
    name: 'User 1',
    status: 'online',
  },
  userId2: {
    id: 'userId2',
    name: 'User 2',
    status: 'offline',
  },
  userId3: {
    id: 'userId3',
    name: 'User 3',
    status: 'offline',
  },
};

export const UPDATE_USER_EVENT = 'UPDATE_USER_EVENT';
export const UPDATE_USER_MAP_EVENT = 'UPDATE_USER_MAP_EVENT';

class UserMapDataController {
  constructor() {
    this.userMap = userMap;
  };

  getUpdateUserEventName = (userId) => {
    return `${UPDATE_USER_EVENT}_${userId}`;
  }

  getUserData = () => {
    return this.userMap;
  };

  getUserDataById = (id) => {
    return this.userMap[id] || {};
  }

  updateUserData = (id, updater = () => { }) => {
    this.userMap = {
      ...this.userMap,
      [id]: updater(this.userMap[id]),
    };

    const event = new CustomEvent(this.getUpdateUserEventName(id), {
      detail: {
        id,
        user: this.userMap[id],
      },
    });
    const updateUserMapEvent = new CustomEvent(UPDATE_USER_MAP_EVENT, {
      detail: {
        id,
        user: this.userMap[id],
      },
    });

    document.dispatchEvent(event);
    document.dispatchEvent(updateUserMapEvent);
  };
};

export const userMapDataController = new UserMapDataController();
