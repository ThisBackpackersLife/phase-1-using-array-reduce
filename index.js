const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// let sum = 0;
// for (let num of batteryBatches)
//     sum += num;

// console.log(sum);
