const express=require('express')
const compression=require('compression')


// constant 
const PORT=8080

const app=express()

app.use(compression({filter:()=>true}))
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