require('dotenv').config();

const dbConfigLocal =
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

module.exports = dbConfigLocal;