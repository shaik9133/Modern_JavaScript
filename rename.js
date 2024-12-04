// compare-scopes-of-the-var-and-let-keywords

// function demoVar() {
//     var x = 10;
//     if(true) {
//         var x = 20;
//         console.log(x);
//     }
//     console.log(x);
// }

// demoVar();

// Rename




// function rename(str) {
//   return str.toLowerCase();
// }

// console.log(rename("Zakeer Hussain")); // "zakeer-hussain"
// console.log(rename("BASHID")); // "bashied"
// console.log(rename("BAshId Sk")); // "bashid-sk"


// nodejs read list of files from folder


// const fs = require('fs');
// const path = require('path');

// function rename(str) {
//   return str.toLowerCase().replace(/ /g, '-');
// }

// // Path to the 'public/js' folder
// const srcFolderPath = path.join(__dirname, 'public', 'js');

// // Read the 'public/js' folder
// fs.readdir(srcFolderPath, (err, files) => {
//   if (err) {
//     console.error('Error reading directory:', err);
//     return;
//   }

//   if (files.length > 0) {

//     const renamedFiles = files.map(file => rename(file));

//     console.log('Files in the public/js folder (renamed):');
//     console.log(renamedFiles);
//   } else {
//     console.log('No files found in the public/js folder');
//   }
// });



const fs = require('fs');
const path = require('path');
function rename(str) {
  return str.toLowerCase().replace(/ /g, '-');
}

// Path to 'public/js' folder
const srcFolderPath = path.join(__dirname, 'public', 'js');

function getRenamedFiles() {
  return new Promise((resolve, reject) => {
    // Read the 'public/js' folder
    fs.readdir(srcFolderPath, (err, files) => {
      if (err) {
        reject('Error reading directory:', err);
      } else {
        // Use the map method 
        const renamedFiles = files.map(file => rename(file));
        resolve(renamedFiles);
      }
    });
  });
}

getRenamedFiles()
  .then(renamedFiles => {
    console.log(renamedFiles);
  })
  .catch(error => {
    console.error(error);
  });
