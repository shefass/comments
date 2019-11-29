const readfiles = require('node-readfiles');
const write = require('write');
const Comments = require("./Comments");

const CONFIQ = require("./CONFIQ");

let report = "";

readfiles(CONFIQ.DIRECTORY_OF_FILES_TO_READ, (err, filename, contents) => {
    if (err) throw err;
    let comments = require('multilang-extract-comments')(contents);
    let show = new Comments(comments, filename);
    let answer = show.createString();
    report = report.concat(answer);
  }).then((files) => {
    console.log('Read ' + files.length + ' file(s)');
    write(CONFIQ.TO_WHAT_FILE_SAVE_REPORT, report, { increment: true });
    console.log('Files saved to ' + CONFIQ.TO_WHAT_FILE_SAVE_REPORT );
    
  }).catch((err) => {
    console.log('Error reading files:', err.message);
  });

