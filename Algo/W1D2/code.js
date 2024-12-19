/**
 * STUDY this until the concept is clear to you, it is very important!
 *
 * A function is simply some instructions (code) that we want to save so that
 * we can re-use it without having to re-write the steps again and again.
 *
 * Parameters are just like variables, they can be named anything and can store
 * any kind of data. The difference is that parameters are variables that
 * hold value / data that is passed into a function at the time of the
 * function being called / executed / invoked.
 *
 * The parameters of a function are whatever outside information the function
 * needs in order to do it's job. Just like if I asked you to add together
 * two numbers, you would ask me, which two numbers? Our function needs
 * to know the same thing to add two numbers together. Get in the habit
 * of asking yourself what a function needs in order to do it's job to
 * determine what parameters are needed. Just as you would request needed
 * information to complete a task you were given, a function would need that
 * information to do the same task, because you are the one writing the
 * function to make it work. Remember this!
 */


function addTwoNums(num1, num2) {
    /**
     * A function can "return" some value / data that can be saved and used
     * outside of the function. A function can only return one time because
     * the return causes the function to end.
     *
     * We are asking this function to add two numbers together, so it should
     * return us the answer.
     */
    return num1 + num2;
}
/**
 * Here we declare a new variable to store the value that the add function
 * returns when we execute it and pass in two numbers to be added.
 *
 * Argument #1 is the integer 5, it is passed into the parameter num1.
 * Argument #2 is the integer 10, it is passed into the parameter num2.
 *
 * Values passed into functions are called arguments while parameters are
 * part of the function's definition to give a name to the information
 * that will be / should be passed in when the function is executed.
 */
var sum = addTwoNums(5, 10);
console.log("addTwoNums function added 5 and 10 and returned:", addTwoNums(5, 10));


/**
 * We can also pass in variables to our function if the variables contain the
 * values / data that we want to pass to our function's parameters.
 */
var netSalesPrice = 100;
var tax = 10;
var grossPrice = addTwoNums(netSalesPrice, tax);
console.log(
    "addTwoNums function added netSalesPrice and tax and returned the sum:",
    grossPrice
);

//*****************************************************************************/
//*****************************************************************************/
//*****************************************************************************/
//*****************************************************************************/
//*****************************************************************************/


/**
 * Concatenate three given strings together in this order:
 * 3rd string, 1st string, 2nd string.
 * @returns {string} The three given strings combined (concatenated).
 */
function combineStrings(/* Replace this comment with the needed parameters. What info does this function need? */) {
    // Replace this comment with the code needed to make this function work.
}

// Test the combineStrings function.
var test = combineStrings("a", "b", "c");
console.log(test, "should equal 'abc'");




//*****************************************************************************/
//*****************************************************************************/
//*****************************************************************************/
//*****************************************************************************/
//*****************************************************************************/





function combineSmallerStringFirst(/* Replace this comment with the needed parameters. What info does this function need? */) {
    // Replace this comment with the code needed to make this function work.
}

test = combineSmallerStringFirst("gramming", "pro");
console.log(test, "should be 'programming'");

test = combineSmallerStringFirst("pro", "gramming");
console.log(test, "should be 'programming'");

test = combineSmallerStringFirst("abc", "def");
console.log(test, "should be 'abcdef'");


