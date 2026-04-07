//Template only for project [test] 
//Actual project runned on .py file
var port = process.env.PORT || 3000; 
var express = require['express']; 
var app  = express();

app.get('/', function (req, res){
    res.send("Hello to Github actions - github_actions_deploy_docker_to_ec2")
}); 

app.listen( port, function(){
    console.log('Listening on port ${port}!')
}); 
