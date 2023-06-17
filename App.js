const express=require('express');
require('dotenv').config();
const app=express();
  const notfound=require('./middlewares/notfound');
  const globalerror=require('./middlewares/global-error-handling')
const connectDb=require('./db/connect');
app.use(express.json());





const getproducts=require('./routers/product');
app.use('/api/v1/', getproducts);

const start=async()=>{
    await connectDb(process.env.url);
    app.listen(3000, (err)=>{
        if(err)console.log(err);
        else console.log("app is listening on poert 3000")
    })
}
app.use(notfound);
app.use(globalerror);
start();


