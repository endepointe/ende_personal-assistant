const db = require('./psql-config');

// utility functions to access users from the github_users table
module.exports = {
  findOrCreate: async (oAuthData) => {
    try {
      const user = await db.oneOrNone(`SELECT * 
                                 FROM github_users
                                 WHERE id = '${oAuthData.id}';`);
      if (user === null) {
        let query = `INSERT INTO github_users (id, data) 
                     VALUES ($1,$2) 
                     RETURNING data`;
        const newUser = await db.one(
          query,
          [oAuthData.id, oAuthData._json, oAuthData._json]
        );
        console.log('new user: ', newUser);
        let value = await db.query('select * from github_users;');
        console.log('value: ', value);
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