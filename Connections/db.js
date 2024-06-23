const mongoose = require('mongoose')
const connectionString = process.env.connectionString

mongoose.connect(connectionString).then((res) => {
    console.log(`MedBooker Server is connected with mongoDB`);
}).catch((err) => {
    console.log(err);
})