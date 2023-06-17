


const getallproductsstatic= async(req, res)=>{
  return  res.status(200).json({name:"wah kya bat hai", title:" wah wah ram ji jod kya bani"});
} 
const getallproducts= async(req, res)=>{
 return   res.status(200).json({name:"wah kya bat hai not static", title:" wah wah ram ji jod kya bani"});
} 
module.exports={getallproducts, getallproductsstatic};