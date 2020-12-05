const express = require('express')
var fs = require('fs'); 
var path = require('path');
var bodyParser = require('body-parser');

const app = express()
let port = 3000;



var htmlPath = path.join(__dirname, 'html');
app.use(express.static(htmlPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// IT FINALLY WORKS LMAO
app.put('/save', function(req, res) {

  name = req.body.name
  message = req.body.message

  const fs = require('fs');
fs.readFile('./html/messages/leaderboard.json', function (err, data) {
    var json = JSON.parse(data);
    json.push(req.body);    
    fs.writeFile("./html/messages/leaderboard.json", JSON.stringify(json), function(err){
      if (err) throw err;
      console.log('A click attempt was appended to file!');
    });
})
});


app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);
});

