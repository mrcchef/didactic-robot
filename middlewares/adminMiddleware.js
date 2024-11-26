const onlyAdminAccess=async(req,res,next)=>{
    try{
        console.log(req.user);
    }
    catch(error){
        return res.status(400).json({
            success : false,
            msg : 'Something went wrong',
        });       
    }

    return next();

}

module.exports={
    onlyAdminAccess
}