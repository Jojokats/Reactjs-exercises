console.log("App.js is running!");

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx =(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            <p>
                {visibility ? 'Hey there - koo koo!': ''}          
            </p>
        
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();


