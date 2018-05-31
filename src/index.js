import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import API_KEY from './keys';

import SearchBar from './components/search-bar'

YTsearch({ key: API_KEY, term: 'surfboards' }, (data) => console.log(data));

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take generated HTML and add to DOM
ReactDOM.render(<App />, document.querySelector('.container'));