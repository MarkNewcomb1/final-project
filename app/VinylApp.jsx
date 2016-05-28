var React = require("react");
var SearchComponent = require('./SearchComponent.jsx');
var AlbumComponent = require('./AlbumComponent.jsx');
var Discogs = require('disconnect').Client;
var db = new Discogs().database();
var VinylApp = React.createClass({
	render: function() {
		var albums = this.state.albums;
		var albumsHTML = [];
        return <div><h1>{this.state.data.title}</h1>
        <SearchComponent />
        <AlbumComponent />
        </div>;
	},
	getInitialState: function(){
		var stateObj = {
			albums: [],
            data: ""
		};
		return stateObj;
	},
	getAlbums: function() {
		var that = this;
		$.get('/albums', function(result) {
			that.setState({
				messages: result
			});
		}, 'json');
	},
	componentDidMount: function() {
        var that = this;
        db.getRelease(176126, function(err, data){
            that.setState({
               data: data 
            });
        });
	}
});

module.exports = VinylApp;





