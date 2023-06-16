const mongoose=require('mongoose')
const mongoURI='mongodb+srv://leezakhanna2109:<password>@cluster0.mcwh2li.mongodb.net/?retryWrites=true&w=majority'


const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connection succesfull")
    }).catch((err)=>{
        console.log("no connection")
    })
}
module.exports=connectToMongo;
