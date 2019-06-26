const express = require('express');

const app = express();
app.get('/', function(request, response){
    response.send("Landing page!")
})

app.listen(3000, function(err){
    if (err){console.log(err);
    }
    console.log("Server is live and on port 3000......");
});