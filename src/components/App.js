import React, { Component } from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from  './VideoDetail';

class App extends Component {

	state = {
		videos: [],
		showLoadingVideosButton: false,
		selectedVideo: null
	};

	onTermSubmit = async (term) => {
		this.setState((state) => ({
			...state,
			showLoadingVideosButton: true
		}));
		let response = await youtube.get('/search', {params: {q: term}});
		this.setState((state) => ({
			videos: response.data.items || [],
			showLoadingVideosButton: false,
			selectedVideo: response.data.items[0] || null
		}));
	}

	onVideoSelect = (video) => {
		this.setState(state => ({
			...state,
			selectedVideo: video
		}));
	}

	render() {
		return (
			<div className="ui container">

				<SearchBar onTermSubmit={ this.onTermSubmit }/>
				
				<div className="ui grid">

					<div className="eleven wide column">
						<VideoDetail video={ this.state.selectedVideo }/>
						{ this.state.showLoadingVideosButton && <p>Loading Videos...</p> }
					</div>

					<div className="five wide column">
						<VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect }/>
					</div>

				</div>

			</div>
		)
	}
}

export default App;