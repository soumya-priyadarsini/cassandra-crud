const { loginService } = require('../services/loginService')

exports.loginController = async(req,res) =>{
    console.log('LoginController request body',JSON.stringify(req.body))

    try {
        const result = await loginService(req)
        console.log('LoginController success response:-',result.message)
        res.status(200).json({
            status:0,
            message:result.message
        })
    } catch (error) {
        res.status(500).json({
            status:1,
            message:error.message
        })
    }
}