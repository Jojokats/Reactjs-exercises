console.log("App.js is running!");

//**********************************************
// only render the subtitle (and <p>) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

const app = {
    title: 'Indecision App',
    subTitle: 'Hey - Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
  
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
    }
  };




const appRoot = document.getElementById('app');



// Create render function that renders the new jsx
// Call it right away
// Call it after the options array has been changed

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>one</li>
                <li>two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
