const client = require('../config/cassandra');

exports.emailloginModel = async(id) =>{

    const query = `SELECT * FROM registerLoginDemo WHERE id='${id}'`

    try {
        const result = await client.execute(query)
       // console.log('loginModel data:-',result)
        return result;
    } catch (error) {
        console.log(`loginModel error`,error);
        throw error;
    }

}