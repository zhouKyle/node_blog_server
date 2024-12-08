const {DataTypes} = require('sequelize')
const sequelize = require('../dbConnect')

// 定义数据模型，就是连接对应的数据表
module.exports = sequelize.define("admin", {
    //这张表拥有那些字段
    loginId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})