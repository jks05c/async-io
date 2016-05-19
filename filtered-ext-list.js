/*
  filtered-ext-list.js
  Josh Stallings
  May 4, 2016
  
  Print a list of files in a given directory, filtered by the extension
  of the files, using asynchronous IO

*/

var fs = require( 'fs' );
var path = require( 'path' );

var folder = process.argv[ 2 ];
var ext = '.' + process.argv[ 3 ];

// read folder asynchronously 
fs.readdir( folder, function( err, files ) {
  if ( err) return console.error ( err );
  files.forEach( function( file ) {
    if ( path.extname( file ) == ext ) {
      console.log( file );
    };
  });
});


