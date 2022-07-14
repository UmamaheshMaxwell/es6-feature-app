/*
    ? Empty target and handler
*/
let target = {}
let handler = {}

let proxy = new Proxy(target, handler)

console.log(proxy)

/*
    ?  Passing empty handler
    * When an empty handler is passed, the proxy behaves as an original object.
*/

let user = {
    name : "Scott Desatnick",
    email: "Scott@ef.com",
    city: "Boston"
}

let handlerOne = {}

let proxyOne = new Proxy(user, handlerOne)

console.log(proxyOne)
console.log(proxyOne.name)

/*
    ?  Proxy handlers
    * Proxy provides two handler methods get() and set()
*/

let student = {
    name : "Scott Desatnick",
    skill: "Great Boss"
}

let handlerTwo = {
    get: function(obj, prop){
        return obj[prop]
    },
    set: function(obj, prop){
        console.log(obj, prop, obj[prop])
        if(obj[prop]){
            console.log(`Can't modify the property `)
        }
    }
}

let proxyTwo = new Proxy(student, handlerTwo)
console.log(proxyTwo)
proxyTwo.name="Scott"