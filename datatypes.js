//Primitives

//String













// --------------------
//Number

//Negative ex: -1

//Exponent ex: -1e2

//Float ex: -1.1e2

//NaN  ex: 'hello' * 3

// parseInt / parseFloat









//---------------------------------
//Boolean

// Falsey values


//Truthy values (everything else)







//-----------------------
// undefined







// -------------------
// Null

let someVar = null
console.log(someVar) // => null



// -------------------
// Symbol









// ----------------------------------------------------------------------
// Non-Primitives

// Object  (object literals)






// ----------------
// Function
    function iLikePancakes() {
        console.log('Pancake technology is truly incredible. What a time to be alive!')
    }
    iLikePancakes
    iLikePancakes()


// Function Expression
let arr = [1,2,3]
let doSomething = function() { return true }
let doSomethingElse = () => false
arr.map(function namedExpression(n) { return n + 1 })


// Function declaration
function doSomething() {
    return true
}
console.log(doSomething)











// ----------------
// Array
let arr = [1, 2, 3, "a", "b", "c", { hello: 'world' }]