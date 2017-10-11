// argument object - no longer bound with arrow function

// ES5 function
// const add = function (a,b) {
//     console.log(arguments);
//     return a + b;
// };

// ES6 function
const add = (a,b) => {
    // arguments won't work in ES6
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));



// this keyword - no longer bound

//ES6
// const user = {
//     name: 'Joanna',
//     cities: ['Montreal', 'Laval', 'Rawdon'],
//     printPlacesLived: function () {
        // console.log(this.name);
        // console.log(this.cities);

//         const that = this;

//         this.cities.forEach(function(city) {
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// };

// user.printPlacesLived();


//It will only work if switched to an arrow function

// const user = {
//     name: 'Alexis',
//     cities: ['Montreal', 'Laval', 'Rawdon'],
//     printPlacesLived: function () {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };

// user.printPlacesLived();


//ES6 method definition syntax
// It has all the same characteristics as an ES5 function



const user = {
    name: 'Ioanna',
    cities: ['Montreal', 'Laval', 'Rawdon'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);  
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());





