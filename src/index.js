import React from 'react';
import ReactDOM from 'react-dom';

import API_KEY from './keys';

// Create a new component 
// Component to produce HTML
const App = () => {
    return <div>Hi!</div>;
}

// const App = function() {
//     return <div>Hi!</div>;
// }

// Take generated HTML and add to DOM
ReactDOM.render(<App />, document.querySelector('.container'));