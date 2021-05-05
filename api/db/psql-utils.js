const db = require('./psql-config');

// utility functions to access users from the github_users table
module.exports = {
  findOrCreate: async (oAuthData) => {
    try {
      const user = await db.oneOrNone(`SELECT * 
                                 FROM github_users
                                 WHERE id = '${oAuthData.id}';`);
      if (user === null) {
        const newUser = await db.one(`INSERT INTO github_users VALUES (
          '${oAuthData.id}',
          '${oAuthData.data}'
        )`)
        console.log('new user: ', newUser)
        return newUser;
      }
      console.log('user: ', user)
      return user;
    } catch (err) {
      console.error(err);
    }
  },
  findById: async (id) => {
    return await db.one('select * from github_users where id = $1', id);
  }
};