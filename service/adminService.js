// admin 模块的业务逻辑层

const md5 = require("md5")
const {loginDao} = require('../dao/adminDao') 
const jwt = require('jsonwebtoken')

module.exports.loginService = async function (loginInfo) {
    loginInfo.loginPwd = md5(loginInfo.loginPwd)
    // 验证数据库中是否存在
    const data = await loginDao(loginInfo)
    if(data && data.dataValues) {
        // 添加 token
        data = data.dataValues;
        
    }
    return {data}

   
}