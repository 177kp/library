var GistBox = React.createClass({
	getInitialState: function() {
		return {
			gists: []
		};
	},

	render: function() {
		var newGist = function(gist) {
			return ( <Gist username={gist.username} url={gist.url} />
		)};
	},

		return (

			<div>

				<h1>GistBox</h1>
				
				<GistAddForm onAdd={this.addgist} />
				{ this.state.gists.map(newGist) }
			</div>

		);

	}

});

React.render(<GistBox />, document.querySelector('#app'));
