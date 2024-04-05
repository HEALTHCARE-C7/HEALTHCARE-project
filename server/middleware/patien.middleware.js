const chekSignup=(req,res,next)=>{
    const {firstName,lastName,email,password,gender,location,age,phoneNumber,speciality}=req.body
    if(!firstName){
        return res.status(400).json('write your firstName')
    }
    if(!lastName){
        return res.status(400).json('write your lastName')
    }
    if(!email || !isValidEmail(email)){
        
        return res.status(400).json('Please provide a valid email address')
    }
    if(!password || password.length<8 ){
        return res.status(400).json('Password must be at least 8 characters long')
    }
    if(!location){
        return res.status(400).json('select your location')
    }
     if(!age){
        return res.status(400).json('select your age')
    } 
    if(!phoneNumber){
        return res.status(400).json('select your phoneNumber')
    }
    
    next()

}
function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function isValidPassword(password) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(password);
}

module.exports=chekSignup