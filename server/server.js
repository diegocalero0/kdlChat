var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(process.argv[2], function(){
	console.log("Corriendo en el servidor - puerto:" + process.argv[2]);
});

app.get("/login", function(req, res){
	var prueba = {"nombre":"diego", "apellido":"calero"};
	res.json(prueba);
});

app.get("/prueba", function(req, res){

	res.send("hola mundo");
});