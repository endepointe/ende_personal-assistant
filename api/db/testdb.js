
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

module.exports = { addUser, getUser };