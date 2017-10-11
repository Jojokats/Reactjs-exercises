'use strict';

console.log("App.js is running!");

//**********************************************
// only render the subtitle (and <p>) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

var app = {
    title: 'Indecision App',
    subTitle: 'Hey - Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'one'
        ),
        React.createElement(
            'li',
            null,
            'two'
        )
    )
);

// const appRoot2 = document.getElementById('app2');

// ReactDOM.render(template, appRoot2);

//****************************************** */

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    )
);

console.log(templateTwo);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

//**********************************************
var countThree = 0;
var minusOne = function minusOne() {
    console.log('minusOne');
};

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        countThree
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    )
);

var appRoot3 = document.getElementById('app3');

ReactDOM.render(templateThree, appRoot3);

//**********************************************
var countFour = 0;
var reset = function reset() {
    console.log('reset');
};

var templateFour = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        countFour
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

var appRoot4 = document.getElementById('app4');

ReactDOM.render(templateFour, appRoot4);

//**********************************************
//Object
// const user = {
//     name: 'Joanna',
//     age: 18,
//     location: 'Montreal'
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } 
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

// const appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);
