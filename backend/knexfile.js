module.exports = {
    development: {
      client: 'mssql',
      connection: {
        host: '127.0.0.1', 
        port: 1433, 
        user: 'sa',
        password: 'yourStrong(!)Password',
        database: 'PlataformaEducativa',
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },
  };
  
  