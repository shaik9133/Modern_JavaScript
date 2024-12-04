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


// function greet(name) {
//     console.log('Hai, ' + name);
// }

// greet('Bruce');

// function greet(userName) {
//     console.log('Hai, ' + userName);
// }

// greet('Bob');


function rename(inputString) {
    
    if (typeof inputString === '') {
        return inputString.toUpperCase(); 
    } else {
        return 'Invalid input, please provide a string';
    }
}


let input = prompt("Enter a string to rename (uppercase transformation):");
let result = renameString(input);
console.log(result);  // Output the renamed (uppercase) string

