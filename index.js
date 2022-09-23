// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    let firstTwo = array.slice(0, 2)
    return firstTwo

    }
const returnLastTwoDrivers = (array) => {
    return array.slice(array.length - 2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// const fareQuintupler = (number) => {
//     return number * 4
// }


const createFareMultiplier = () => {
   return function fareQuintupler(number) {
    return number * 5
   }
}
    

const fareDoubler= (fare)=> {
    return fare * 2
}



const fareTripler = fare => {
    return fare * 3
}

function selectDifferentDrivers (drivers, selectDrivers ) {
    return selectDrivers ( drivers )
}