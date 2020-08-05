//Primitives

//String

"double quote"
'singe quote'
`back ticks for ${'interpolation'}`











// --------------------
//Number

//Negative ex: -1

//Exponent ex: -1e2

//Float ex: -1.1e2

//NaN  ex: 'hello' * 3

// parseInt / parseFloat
parseInt("2")
parseFloat("2.52")







//---------------------------------
//Boolean

// Falsey values
"" // empty string
false // false
0 // zero
undefined
null
NaN


// Truthy values (everything else)







//-----------------------
// Undefined

let name
console.log(name)





// -------------------
// Null

let someVar = null
console.log(someVar) // => null



// -------------------
// Symbol

// use them as keys when making objects







// ----------------------------------------------------------------------
// Non-Primitives - pass by reference

let arr = [1,2,3,4]
arr === [1,2,3,4]

function multiply(col){
    let i = 0
    col.forEach(e => {
        col[i] = e * 2
        i += 1
    })
}

function mult(num){
    return num = num*2
}

// Object  (object literals)

const person = {name: 'Fred', age: '20'}
const school = {name: 'high school', students: [person]}

person.age = 30
person["name"] = "Freddy"
person["height"] = "tall"




// ----------------
// Function
    function iLikePancakes() {
        console.log('Pancake technology is truly incredible. What a time to be alive!')
    }
    iLikePancakes
    iLikePancakes()  // CALLING THE FUNCTION

    function doubleFunction(){
        let greeting = "hi"
        console.log("Parent function")
        return function(){
            console.log(greeting)
        }
    }

    doubleFunction()()

// Function Expression
let arr = [1,2,3]
let doSomething = function() { return true }
let doSomethingElse = () => false
arr.map(function(n) { return n + 1 })


// Function declaration
function doSomething() {
    return true
}
console.log(doSomething)











// ----------------
// Array
let arr = [1, 2, 3, "a", "b", "c", { hello: 'world' }]
// .map
// .reduce
// .forEach
// .split
// MDN documentation for array methods