let userList = [];

const listHelper = {
  resetList: index => {
    userList[index] = [];
    return userList[index];
  },
  createUserList: index => listHelper.resetList(index),
  getUserList: index => userList[index] || [],
  addItemToList: (item, list) => {
    const newList = list.slice(0);
    newList.push(item);
    return newList;
  },
  addItemToListByPosition: (item, list, position) => {
    const newList = list.slice(0);
    if (Array.isArray(newList[position]) === false) newList[position] = [];
    userList[position].push(element);
    return newList;
  },
  addItemToListByPositionWithSubcategory: (
    item,
    list,
    position,
    subcategory
  ) => {
    const newList = list.slice(0);
    if (Array.isArray(newList[position]) === false) newList[position] = [];
    if (!newList[position][subcategory]) newList[position][subcategory] = [];
    newList[position][subcategory].push(item);
    return newList;
  },
  saveList: (index, list) => {
    const newList = list.slice(0);
    userList[index] = newList;
    return userList;
  }
};

export default listHelper;
