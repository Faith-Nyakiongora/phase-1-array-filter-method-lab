// Code your solution here

  // Test case for matchName
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, lowerName) {
    return drivers.filter(driver => driver.toLowerCase() === lowerName.toLowerCase());
  }
console.log(findMatching())

function fuzzyMatch(drivers,lowerName){
    return drivers.filter(driver => driver[0] === lowerName[0])
}

function matchName(drivers,lowerName){

    const matches= drivers.filter(driver => driver.name === lowerName);

    return matches
}
