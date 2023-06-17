const globalerror=(err, req,res, next)=>{
       
        return res.staus(404).json({msg:err.message})
}
module.exports=globalerror;