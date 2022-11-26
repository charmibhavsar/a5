var mongoose = require('mongoose')
const connectDB = () => {

    mongoose.connect("mongodb+srv://cb1234:charmi1234@web322.dab5kmd.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }, err => {
            console.log('connected')
        });
}

module.exports = connectDB



