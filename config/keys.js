const mongoose = require('mongoose')

const Uri = ("mongodb://Ashish:Ashish@mernbasic-shard-00-00-w0ajb.gcp.mongodb.net:27017,mernbasic-shard-00-01-w0ajb.gcp.mongodb.net:27017,mernbasic-shard-00-02-w0ajb.gcp.mongodb.net:27017/test?ssl=true&replicaSet=MERNBasic-shard-0&authSource=admin&retryWrites=true&w=majority")
const db = async () => {
    await mongoose.connect(Uri, {

    });
    console.log('db is connected')
}

module.exports = Uri;