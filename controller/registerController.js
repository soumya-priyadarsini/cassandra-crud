const { registerService } = require('../services/registerService');

exports.registerController = async(req,res) =>{
    console.log(`registerController request body from postman:--`,JSON.stringify(req.body))
    try {
        const result = await registerService(req.body);
        console.log('registerController response from frotend:-',result.message)
        res.status(200).json({
            status:0,
            message:result.message,
            token:result.token
        })
    } catch (error) {
        console.log('error:--',JSON.stringify(error));
        res.status(500).json({
            status:1,
            message:error
        })
    }

}
