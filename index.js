var http = require('http')
var path = require('path')
var fs = require('fs')

//automatically browserify any requests
//for a js file coming to the server
var beefy = require('beefy')

// Atom Module to control application life.
var app = require('app')
// Atom Module to create native browser window.
var BrowserWindow = require('browser-window')

var entry = process.argv[2];
var port = 16765;
var width = 800;
var height = 600;
if (process.argv.length == 5) {
  width = parseInt(process.argv[3]);
  height = parseInt(process.argv[4]);
}

var startBrowser = function() {
  var win = new BrowserWindow({
    width: width,
    height: height,
    show : true,
    'enable-larger-than-screen' : true,
    'skip-taskbar' : true,
    'use-content-size' : true
  })

  win.loadUrl("http://localhost:" + port);
}

app.on('ready', function() {
  var opts = {
    entries: [entry],
    title: entry
  }
  var beefyHandler = beefy(opts);
  var server = http.createServer(beefyHandler);
  server.on("listening", function() {
    //for some reason I have to wait for this
    //to work. figure out later.
    setTimeout(startBrowser, 200);
  })
  server.listen(port);
})
