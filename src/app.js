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

const appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot2);

//****************************************** */

let count = 0;
// Add 1 from count
const addOne = () => {
    count++;
    renderCounterApp();
};
// Subtract 1 from count
const minusOne = () => {
    count--;
    renderCounterApp();
};
// reset count to 0
const reset = () => {
    count = 0;
    renderCounterApp();
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

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
