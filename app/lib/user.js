import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
// import psql db

// insert psql db after basic authentication is complete
const users = [];

export async function createUser({ username, password }) {
  console.log(username, password);
  //create the user, save the salt and hashed password
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
  };
  // save the user to the db. currently non persistent. use psql
  users.push(user);

  console.log(users);

  return { username, createdAt: Date.now() }
}

export async function findUser({ username }) {
  // retrieve user from psql db
  return users.find((user) => user.username === username);
}

export function validatePassword(user, inputPassword) {
  const inputHash = crypto.pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}