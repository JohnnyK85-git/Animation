const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const server = express();
const liveReloadServer = livereload.createServer();

//Use the middleware
server.use(connectLiveReload());
server.use(express.static("Public"));

//watch the changes in the static folder
liveReloadServer.watch("Public");

//declare and listen the server at the specified port
const port = 5000;
server.listen(port, function () {
  console.log(`server is listening to the port ${port}`);
});
