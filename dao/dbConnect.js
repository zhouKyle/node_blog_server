// 负责连接数据库的
const {Sequelize} = require('sequelize')

//创建连接
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mysql' | 'db2' | 'snowflake' | 'oracle' */
    logging: false
  });


// 向外暴露连接实例
module.exports = sequelize;