
/**
 * T I M I N G  F U N C T I O N S
 * When time defined on waitTime has passed, function interval will be cleared
 * and function timerFinished will be called
 */

//Setting wait time to 3 seconds
const waitTime = 3000;
console.log(`Setting a ${waitTime/1000} second delay`);

//function to cancel the interval "intervalo"
const timerFinished = () => {
    clearInterval(intervalo)
    console.log("\nfinish");
}

/**Argument 1: Function to call when timeOut has arrived
 * Argument 2: defines TimeOut
 */
setTimeout(timerFinished, waitTime);

const waitInterval = 1000;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting... ${currentTime} `);
};
/**Calls function wait interval every waitInterval mili-seconds*/
const intervalo = setInterval(incTime, waitInterval);



