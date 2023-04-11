const bcrypt = require('bcrypt')
const { emailloginModel } = require('../model/loginModel')
exports.loginService = async (data) => {
    const { email, password } = data.body;
    const id = data.user
    //console.log('validate:--',id);
    try {
        const userPresnt = await emailloginModel(id);
        //console.log("DB DATA:-",userPresnt.rows[0].password)
        if (userPresnt.rowLength != 0) {
            const match = bcrypt.compareSync(password, userPresnt.rows[0].password);
            if (match) {
                return ({ message: "user login successfully" })
            } else {
                throw ({ message: "Password not matched" })
            }
        } else {
            throw ({ message: "login error" })
        }
    } catch (error) {
        console.log('loginService error:-', JSON.stringify(error));
        throw error
    }

}