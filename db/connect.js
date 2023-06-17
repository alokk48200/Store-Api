const mongoose=require('mongoose');


const connectDb=(url)=>{
    return mongoose.connect(url).then(()=>console.log("connected to db...........")).catch((err)=> console.log("Alok"))
}
module.exports =connectDb;