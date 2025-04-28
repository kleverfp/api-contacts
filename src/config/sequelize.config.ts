import { SequelizeOptions } from 'sequelize-typescript';

const config: SequelizeOptions = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: +(process.env.MYSQL_PORT || '3306'),
  dialect: 'mysql',
};

export = config;
