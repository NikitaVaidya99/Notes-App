const mongoose=require('mongoose')

const configureDB=()=>{
//db config
mongoose.connect('mongodb://localhost:27017/aug-notes-app',{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log(err)
})

}

module.exports=configureDB