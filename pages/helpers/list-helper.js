let userList = [];

const listHelper = {
  resetList: index =>{
    userList[index] = [];
    return userList[index];
  },
  resetLists: () =>{
    userList = [];
  },
  createUserList: index => {
    return listHelper.resetList(index);
  },
  getUserList: index => {
    return userList[index] || [];
  },
  addItemToList: (item, list) => {
    const newList = list.slice(0);
    newList.push(item);
    return newList;
  },
  addItemToListByPosition: (item, list, position) => {
    const newList = list.slice(0);
    if (Array.isArray(newList[position]) === false) newList[position] = [];
    newList[position].push(item);
    return newList;
  },
  addUniqueItemToList: (item, list) => {
    const newList = [];
    newList.push(item);
    return newList;
  },
  saveList: (index, list) => {
    const newList = list.slice(0);
    userList[index] = newList;
    return userList;
  }
};

export default listHelper;
