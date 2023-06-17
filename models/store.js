const mongoose=require('mongoose');

  const storeSchema= new mongoose.Schema({
      name:{
      type:String,
      required:true,
      
      },
      rating:{
        type:Number,
       default:4.5


      },
      company:{
        type:String,
        enum:['ikea', 'liddy', 'caressa', 'marcos']
      },
      createdAt:{
        type:Date,
      },
      price:{
           type:Number,
           required:[true, "price must be provided"],
      },
      feature:{
        type:Boolean,
        default:false,
      }
  });
  module.exports=mongoose.model('store', storeSchema);