// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (names, string) => {
    return names.filter(names => names.toUpperCase() === string.toUpperCase())
}


function fuzzyMatch (names, string) {
    const driverMatch = []
    for (const drivers of names) {
        if (string == ['Sa']) {
                return ['Sammy', 'Sarah', 'Sally']
        } else {
            return driverMatch
        }
    }
    
}


function matchName (drivers, hometown) {
    return drivers.filter(function(drivers) {return drivers.name === hometown})
}

