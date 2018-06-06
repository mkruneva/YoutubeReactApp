import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import API_KEY from './keys';

import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTsearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }

}

// Take generated HTML and add to DOM
ReactDOM.render(<App />, document.querySelector('.container'));