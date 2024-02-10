const dbConfig = {
  host: '127.0.0.1',
  user: 'test',
  password: 'password',
  database: 'bakery',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
};

export default dbConfig;