let userList = [];

const returnList = list => Object.freeze(list);

const listHelper = {
  resetList: index =>{
    userList[index] = [];
    return returnList(userList[index]);
  },
  resetLists: () =>{
    userList = [];
  },
  createUserList: index => {
    return returnList(listHelper.resetList(index));
  },
  getUserList: index => {
    return returnList(userList[index] || []);
  },
  addItemToList: (item, list) => {
    const newList = list.slice(0);
    newList.push(item);
    return returnList(newList);
  },
  addItemToListByPosition: (item, list, position) => {
    const newList = list.slice(0);
    if (Array.isArray(newList[position]) === false) newList[position] = [];
    userList[position].push(element);
    return returnList(newList);
  },
  addItemToListByPositionWithSubcategory: (item, list, position, subcategory) => {
    const newList = list.slice(0);
    if (Array.isArray(newList[position]) === false) newList[position] = [];
    if (!newList[position][subcategory]) newList[position][subcategory] = []
    userList[position][subcategory].push(element);
    return returnList(newList);
  },
  saveList: (index, list) => {
    const newList = list.slice(0);
    userList[index] = newList;
    return returnList(userList);
  }
};

export default listHelper;
