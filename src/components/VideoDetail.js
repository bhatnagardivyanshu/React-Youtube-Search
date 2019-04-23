import React from 'react';

const VideoDetail = ({ video }) => {
	if (! video) {
		return <div></div>
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe title="Video Player" style={{ 'border': 0 }} src={ videoSrc } frameborder="0"></iframe>
			</div>
			<div className="ui segment">
				<h4 className="ui header">{ video.snippet.title }</h4>
				<div className="description">
					{ video.snippet.description }
				</div>
			</div>
		</div>
		)
}

export default VideoDetail;