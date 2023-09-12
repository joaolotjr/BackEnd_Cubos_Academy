const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'postgres',
      password : '123456',
      database : 'knexjs'
    }
  });


  module.exports = knex;