const mongoose = require('mongoose')

const UserSchemaa = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    country: {
        type: Number,
        require: true
    },
})


const StudentD = mongoose.model('students',UserSchemaa)

module.exports = StudentD