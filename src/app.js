console.log("App.js is running!");

//**********************************************
// only render the subtitle (and <p>) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

const app = {
    title: 'Indecision App',
    subTitle: 'Hey - Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>     
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        
        <ol>
            <li>one</li>
            <li>two</li>
        </ol>
    </div>
);

// const appRoot2 = document.getElementById('app2');

// ReactDOM.render(template, appRoot2);

//****************************************** */

let count = 0;
const addOne = () => {
    console.log('addOne');
};

const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
</div>
);

console.log(templateTwo);
    

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

//**********************************************
let countThree = 0;
const minusOne = () => {
    console.log('minusOne');
};

const templateThree = (
    <div>
    <h1>Count: {countThree}</h1>
    <button onClick={minusOne}>-1</button>
</div>
);


const appRoot3 = document.getElementById('app3');

ReactDOM.render(templateThree, appRoot3);

//**********************************************
let countFour = 0;
const reset = () => {
    console.log('reset');
};

const templateFour = (
    <div>
    <h1>Count: {countFour}</h1>
    <button onClick = {reset}>reset</button>
    </div>
);

const appRoot4 = document.getElementById('app4');

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
