import React from 'react';
import ReactDOM from 'react-dom';

import API_KEY from './keys';

import SearchBar from './components/search-bar'

// Create a new component 
// Component to produce HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take generated HTML and add to DOM
ReactDOM.render(<App />, document.querySelector('.container'));