const express = require('express');
const user = require('./src/routes/user')
const allowCors = require('./src/cors')

const app = express();


const bodyParser = require('body-parser')

const port = 4000;

app.use(allowCors)
app.use(bodyParser.json())
app.use('/api/user',user)

// app.get('/',function(req,res){
//     res.send('Testando');
// })

app.listen(port,function(){
    console.log(`BACKEND is running on port ${port}.`)
})

