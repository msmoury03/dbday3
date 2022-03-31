const mongoose = require('mongoose')
const { insertMany } = require('./models/Userschema.js')
const StudentD = require('./models/Userschema.js')

const DBUrl = 'mongodb://localhost:27017/school'

const student1 = new StudentD({
    name:'ramlal',
    age:15,
    email:'ramlal@mail.com'
})

mongoose.connect(DBUrl,(err,res)=>{
    if(err) console.log(err);
    console.log('Connected')
})

// student1.save((err,res)=>{
//     if(err) console.log(err);
//     console.log(res)
// })

const stud1 = {
    name:'ramm',
    age:45,
    email:'ramm@mail.com'
}

const stud2 = {
    name:'sameer',
    age:23,
    email:'sameer@mail.com'
}



// using insertMany option 

// StudentD.insertMany([stud1,stud2],(err,suc)=>{
//     if(err) console.log(err);
//     console.log('Inserted data succ')
// })



// finding the document

// StudentD.find({age:{$lte:25}},(err,res)=>{
//     if(err) console.log(err);
//     console.log(res);
// })


// updating the document

// StudentD.updateOne({age:15},{$set:{name:'ram'}},(err,res)=>{
//     if(err) console.log(err);
//     console.log(res);
// })


