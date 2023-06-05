
/**
 * I N P U T S   &   O U T P U T S
 * stdout: Envía cadenas al terminal
 */

//process.stdout.write("Hello \n \n");
//console.log("Hello \n\n");

/** trim() delete spaces from a word
 * trimStart() / trimEnd() 
const saludo = '   Hello world!   ';
console.log(saludo);
console.log(saludo.trim());
*/


const questions = [
    "What is your name", 
    "What would you rather be doing?",
    "What is your preferred programming language"
]

const answers = [];


/* Function that shows the content of the array questions[] according to the input*/
function ask(i = 0) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

//Ask user the first time, with questions[0]
ask(0);

//process.stdin listens for the user input
//Then it stores the answers on answers[] asincronously

process.stdin.on("data", function(data) {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length)
    }
    else{
        process.exit();
    }
});


// This function is called when the process gets an exit(asíncronous)
process.on("exit", function(){
    process.stdout.write("\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later `);
})