// 负责和数据库打交道

const adminModel = require("./model/adminModel")

// const adminModel = require("./model/adminModel")

// 登录
module.exports.loginDao = async function(loginInfo) {
    // 连接数据库进行查询
    return  result = await adminModel.findOne({
        where: {
            loginId: loginInfo.loginId,
            loginPwd: loginInfo.loginPwd
        }
    })
}
