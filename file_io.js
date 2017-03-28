 "use strict"


 // Telling node what to import because it doesn't 
 // include everything on its own to make programs run faster

 // Goal is to print out json file contents to the terminal

 const fileSystem = require("fs");

 let stuff = fileSystem.readFileSync('./dummy.json', "utf8");

 // understand what the file system is
 // readFileSync is a method on the file system that lets us put in options after the file name

 console.log(stuff);

 // What we get now is a buffer but we want to turn the buffer into a string without
 // using toString()

