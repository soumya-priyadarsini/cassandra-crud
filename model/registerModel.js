
const client = require('../config/cassandra');

exports.registerModel = async({uniqueId,email,hashPass}) =>{
//console.log(hashPass)
    const query = `INSERT INTO registerLoginDemo (id,email,password) VALUES('${uniqueId}','${email}','${hashPass}')`

    try {
        const result = await client.execute(query)
        return result;
    } catch (error) {
        console.log(`RegisterModel error`,error);
        throw error;
    }

}