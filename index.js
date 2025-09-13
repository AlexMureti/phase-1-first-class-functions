//receivesAFunction 
//This function takes a callback function as an argument and calls it
function receivesAFunction (callback) {
    callback("Mike");
}

//returnsANamedFunction
//This function takes no arguments and returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("I am a named function");
    };
}

//returnsAnAnonymousFunction
//This function takes no arguments and returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function");
    };
}