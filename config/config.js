module.exports = {
    development: {
      dialect: 'mysql',
      database: process.env.POSTGRES_DB_NAME || 'perusahaan2',
      username: process.env.POSTGRES_DB_USERNAME || 'root',
      password: process.env.POSTGRES_DB_PASSWORD || '',
      host: process.env.POSTGRES_DB_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_DB_PORT || '3306')
    },
    test: {
      dialect: 'postgres',
      database: process.env.POSTGRES_DB_NAME || 'perusahaan2',
      username: process.env.POSTGRES_DB_USERNAME || 'postgres',
      password: process.env.POSTGRES_DB_PASSWORD || 'postgres',
      host: process.env.POSTGRES_DB_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_DB_PORT || '5432')
    },
    production: {
      dialect: 'postgres',
      database: process.env.POSTGRES_DB_NAME,
      username: process.env.POSTGRES_DB_USERNAME,
      password: process.env.POSTGRES_DB_PASSWORD,
      host: process.env.POSTGRES_DB_HOST,
      port: parseInt(process.env.POSTGRES_DB_PORT)
    }
  }