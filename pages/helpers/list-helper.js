let userList;

const listHelper = {
  createUserList: () => {
    userList = [];
    return userList;
  },
  getUserList: () => {
    return userList || [];
  },
  addItemToList: (item, list) => {
    const newList = list.slice(0);
    newList.push(item);
    return newList;
  },
  saveList: list => {
    const newList = list.slice(0);
    userList = newList;
    return userList;
  }
};

export default listHelper;
