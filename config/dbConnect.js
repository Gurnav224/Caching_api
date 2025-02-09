

const mongoose = require('mongoose');

const dbConnect = async ()  => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{dbName:'cachingDB'});
        console.log(`succesfully connected to database ${conn.connection.db.databaseName}`)
    } catch (error) {
        console.error('error to connecting database')
    }
}


module.exports = dbConnect;