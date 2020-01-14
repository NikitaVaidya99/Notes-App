const express=require('express')
const configureDB=require('./config/database.js')
const router =require('./config/routes')
const cors=require('cors')
const app=express()


app.use(express.json())

const port=3025

//connection to mongoose db
configureDB()

app.use(cors())


//route handlers || request handlers
app.get('/',(req, res)=>{
    res.send('welcome to the notes app')
})

app.use('/', router)


app.listen(port, ()=>{
    console.log('welcome')
})