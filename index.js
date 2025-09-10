function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
}

// Match the 'name' property of driver objects
function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}

const driversArray = ["Bobby", "Sam", "Samantha", "Rob"];

console.log(findMatching(driversArray, "sAm")); // => ["Sam"]
console.log(fuzzyMatch(driversArray, "Sa")); // => ["Sam", "Samantha"]

const driverObjects = [
  { name: "Bobby", hometown: "New York" },
  { name: "Sam", hometown: "Boston" },
];
console.log(matchName(driverObjects, "Sam")); 

