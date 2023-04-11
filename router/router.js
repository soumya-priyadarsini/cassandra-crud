const router = require('express').Router();
const {validateToken} = require('../helper/jwt')
const { registerController } = require('../controller/registerController');
const { loginController } = require('../controller/loginController');

router.post('/register',registerController);
router.post('/login',validateToken,loginController)

module.exports = router