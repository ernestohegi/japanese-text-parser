let userList = []

const resetList = (index) => {
  userList[index] = []
  return userList[index]
}

const createUserList = (index) => resetList(index)

const getUserList = (index) => userList[index] || []

const addItemToList = (item, list) => {
  const newList = list.slice(0)
  newList.push(item)
  return newList
}

const addItemToListByPositionWithSubcategory = (
  item,
  list,
  position,
  subcategory
) => {
  const newList = list.slice(0)
  if (Array.isArray(newList[position]) === false) newList[position] = []
  if (!newList[position][subcategory]) newList[position][subcategory] = []
  newList[position][subcategory].push(item)
  return newList
}

const saveList = (index, list) => {
  const newList = list.slice(0)
  userList[index] = newList
  return userList
}

export {
  resetList,
  createUserList,
  getUserList,
  addItemToList,
  addItemToListByPositionWithSubcategory,
  saveList,
}
