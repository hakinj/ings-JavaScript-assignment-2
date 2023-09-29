Array1 = [15, 30, 45, 60];
Array2 = [5, 6, 3, 10];

// Check if the arrays are the same length
if (Array1.length !== Array2.length) {
    throw new Error('Arrays must be the same length');
};

// Create a new array to store the results
const newArray = [];

// Loop through the arrays and divide each element
for (let i = 0; i < Array1.length; i++) {
    newArray.push(Array1[i] / Array2[i]);
    document.getElementById("demo").innerHTML = newArray;
};
console.log(newArray);