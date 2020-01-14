const {User}=require('../models/user')

module.exports.register=function(req, res){
    const body=req.body
    const user=new User(body)
    
    user.save()
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
}

module.exports.login=function(req, res){
    const body=req.body
    User.findByCredentials(body.email, body.password)
    .then(function(user){
        return user.generateToken()
    })
    .then(function(token){
        //res.setHeader('x-auth', token).send(token)
       res.send(token)
    })
    .catch(function(err){
        res.send(err)
    })
    
}

module.exports.account=function(req,res){
   const {user}=req
  
   res.send(user)
  
}

// module.exports.logout=function(req, res){
// const {user, token}=req
// User.findByIdAndUpdate(user._id, {$pull:{tokens:{token:token}}})
// .then(()=>{
//     res.send({notice:'successfully logged out'})
// })
// .catch(function(err){
//     res.send(err)
// })
// }

module.exports.logout= function(req, res){
    const { user, token } = req 
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token }}})
        .then(function(){
            res.send({notice: 'successfully logged out'})
        })
        .catch(function(err){
            res.send(err)
        })
}