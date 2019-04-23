import React, { Component } from 'react';

class SearchBar extends Component {

	state = { term: '' };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onTermSubmit(this.state.term);
	}

	render() { 
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="search">Search Video</label>
						<input id="search" type="text" onChange={(e) => this.setState({ term: e.target.value })}/>
				   	</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;