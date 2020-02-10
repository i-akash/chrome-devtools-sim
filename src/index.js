const express=require('express')
const compression=require('compression')
const minifier=require('express-minify')

// constant 
const PORT=8080

const app=express()

app.use(compression({filter:()=>true}))
app.use(minifier())


app.use((req,res,next)=>{
    // res.setHeader("Cache-Control","public, max-age=31536000");
    res.setHeader("Set-Cookie","user=a3fWa;Max-Age=3600; HttpOnly")
    next();})

app.use(express.static('public'))

app.get('/net-test',(req,res,next)=>{
    res.json(
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
                }
            }      
        })
})


app.listen(PORT,()=>console.log(`Server listening on ${PORT}`))