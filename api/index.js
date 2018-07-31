const colors = require('colors')
const express = require('express') 
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors()) // for cross-domain ajax
app.use(bodyParser.json()); //for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

console.log('running index.js'.red)
let messages = [];
app.get('/', function(req, res){
    res.send('Hello World!')
})

app.post('/message', function(req, res){
    console.log(req.body.text)
    console.log(req.body.username)

    messages.push({
        text: req.body.text, 
        username: req.body.username, 
        timestamp: new Date().getTime(),
    })
    res.send(messages)

})

app.listen(1337, function(){
    console.log('Example app listening on port 1337!')
}) 