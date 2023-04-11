const unidque = require("unidque");
const bcrypt = require('bcrypt')
const { registerModel } = require('../model/registerModel');
const { generateToken } = require('../helper/jwt')

exports.registerService = async(data) =>{

    const {email,password} = data;
    const uniqueId = unidque(20,true);
    //console.log(uniqueId)
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
   //console.log(hashPass)
    try {
        const dbResult = await registerModel({uniqueId,email,hashPass});
        return {message:'Data inserted Successfully',token:await generateToken(uniqueId)};
    } catch (error) {
        throw error;
    }

}