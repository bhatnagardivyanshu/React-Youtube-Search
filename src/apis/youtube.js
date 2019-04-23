import axios from 'axios';

const KEY = 'AIzaSyBk5UISIjnAy-Wgt9gQ1UY4UMbkLO7df5M';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});