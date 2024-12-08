// 负责对数据库进行初始化操作
const sequelize = require('./dbConnect'); // 数据库连接实例
const adminModel = require('./model/adminModel'); // 确保模型已定义并导入

const md5 = require('md5');

(async function() {
    // 将数据模型和数据库blog进行同步
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
    }

    // 同步完成之后，有一些表是需要一些初始化数据
    // 我们需要先查询这张表有没有内容，没有内容我们才初始化数据
    const adminCount = await adminModel.count();

    if(!adminCount) {
        // 进入此if ， 说明该表没有数据， 我们进行一个初始化
        await adminModel.create({
            loginId: 'admin',
            name: '超级管理员',
            //  需要加密， 通过MD5加密 
            loginPwd: md5("adminblog") 
        })
        console.log('初始化管理员数据完毕=====')
    }
    console.log("数据库数据已经准备完毕====")
})();