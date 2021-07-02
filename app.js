const express = require('express');
const app = express()
const port = 3000

app.get('/hello',(req,res)=>{
    res.send('<h1>Task manager app</h1>')
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
} )
