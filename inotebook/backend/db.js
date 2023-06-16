const mongoose=require('mongoose')

const mongoURI='mongodb+srv://leezakhanna2109:ohBw8CYZa12A4KON@cluster0.mcwh2li.mongodb.net/inotebook?retryWrites=true&w=majority'




const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connection succesfull")
    }).catch((err)=>{
        console.log("no connection")
    })
}
module.exports=connectToMongo;
