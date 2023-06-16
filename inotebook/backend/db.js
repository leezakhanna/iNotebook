const mongoose=require('mongoose')
const mongoURI='<Your connection string>'


const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connection succesfull")
    }).catch((err)=>{
        console.log("no connection")
    })
}
module.exports=connectToMongo;
