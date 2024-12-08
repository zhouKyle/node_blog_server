var express = require('express');
var router = express.Router();

const { loginService } = require('../service/adminService')

/* GET home page. */
router.post('/login',async function(req, res, next) {
    // 首先应该有个验证码的验证

    // 进行账号密码的验证，属于业务逻辑，在service 上进行业务逻辑
    const result = await loginService(req.body)
    console.log('-=====',result)
});

module.exports = router;
