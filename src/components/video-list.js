import React from 'react';

const VideoList = (props) => {
    // const videos = props.videos;
    return (
        <ul className="col-md-4 list-group">
            <li>{props.videos.length}</li>
            {/* {videos.map(i => {
                return <li>{i}</li>
            })} */}
        </ul>
    );
}

export default VideoList;