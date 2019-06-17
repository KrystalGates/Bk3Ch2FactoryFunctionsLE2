// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const createPet = (name, breed) => ({
    "petName" : name,
    "petBreed": breed
})

let bowWowKennels = []

bowWowKennels.push(createPet( "Steve", "germansheperd"))
bowWowKennels.push(createPet("Yum", "blue heeler"))
bowWowKennels.push(createPet( "John", "golden retriever"))
console.log(bowWowKennels)

