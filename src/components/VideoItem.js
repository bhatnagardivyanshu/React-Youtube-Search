import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div className="video-item item" onClick={ () => onVideoSelect(video) }>
			<img className="ui  image" src={ video.snippet.thumbnails.default.url }
				style={{
					height: video.snippet.thumbnails.default.height,
					width: video.snippet.thumbnails.default.width
				}} alt=""
			/>
			<div className="content">
				<div className="header">{ video.snippet.title } - { video.snippet.channelTitle }</div>
			</div>

		</div>
	)
}

export default VideoItem;