const express=require('express')

// constant 
const PORT=8080

const app=express()

app.use(express.static('public'))

app.get('/',(req,res,next)=>{
    res.send('index.html')
})



app.listen(PORT,()=>console.log(`Server listening on ${PORT}`))