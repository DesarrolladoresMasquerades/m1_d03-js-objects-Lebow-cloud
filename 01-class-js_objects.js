// Class code examples

const person1 = {
    firstName : "Chee Kean",
    weight : 277,
    height : 1.78
}

const person2 = {
    firstName : "Daniel Milan",
    weight : 256,
    height : 1.98
}

const person3 = {
    firstName : "Marco",
    weight : 245,
    height : 1.8
}


// Accesing a property with dot notation
    console.log(
        person1.firstName,
        person1.weight
    )

// Accesing the property with bracket notation (indirect acces/dinamic acces)
console.log(person1["weight"])

const personKey = ["firstName","weight","height"]

for(key of personKey){
    console.log(`person1 ${key}: `, person1[key])
}

person1.nationality = "Italian"

person1["favFood"] = "pizza"


const newKey = `favBook`
person1[newKey] = "guide to galaxy"

console.log("personNewLog1:", person1)

for (key in person1) console.log(person1[key])

// Object.keys(person1)
for (key of Object.keys(person1)) console.log(person1[key])

person1[1]  // Error because you have to use STRINGS

console.log("accesing a number", person1[1])
console.log("reading index from keys", Object.keys(person1)[1])

const tween1 = {
    name: "Carlos",
    age: 24
}

const tween2 = {
    name: "Carlos",
    age: 24
}

console.log(
    tween1 === tween2,
    "Carlos" === "Carlos"
)
