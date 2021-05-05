
const users = [];

const addUser = (user) => {
  console.log('pushing user to db')
  users.push(user);
  return;
}

const getUser = () => {
  console.log('getting user from db')
  return users;
}

const findOrCreate = (user) => {
  for (let i = 0; i < users.length; i++) {
    if (user.id === users[i].id) {
      return user;
    }
  }
  addUser(user);
  return user;
}

const findById = (user) => {
  for (let i = 0; i < users.length; i++) {
    if (user.id === users[i].id) {
      return user;
    }
  }
  return -1;
}

module.exports = { addUser, getUser, findOrCreate, findById };