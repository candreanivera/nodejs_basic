/**
 * P R O C E S S  A R G V   A N D   F L A G S
 */


//Returns absolute path to node + path to the current file
console.log(process.argv);

/**
 * Function definition
 * process.argv.indexOf --> returns the first index at which a given element is found
 */
function grab(flag){
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    console.log(indexAfterFlag);
    return process.argv[indexAfterFlag];
}

//IF file is executed as: 
// node procesarargv --user cristina --greeting Hello

// It is expected to receive the value of flag --greeting = "Hello"
let saludo = grab("--greeting");
console.log(saludo);

// It is expected to receive the value of flag --user = "Cristina"
let usuario = grab("--user");
console.log(usuario);
