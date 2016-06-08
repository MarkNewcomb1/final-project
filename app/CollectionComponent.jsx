var React = require("react");
var AlbumComponent = require('./AlbumComponent.jsx');
var AlbumsComponent = require('./AlbumsComponent.jsx');
var Link = require('react-router').Link;
var CollectionComponent = React.createClass({
    //componentdidmount will get array from server, 
    
    //set array into state here and have render bound to that state
    render: function() {
        return (
            <div>
              <Link className="link" to="/">Back to Search</Link>
               <AlbumsComponent ada={this.state.albums} />
            </div>
        )
    },
    getInitialState: function(){
		var obj = {
			albums: []
		};
		return obj;
	},
componentDidMount: function() {
    this.serverRequest = $.get("/collection", function (data) {
      this.setState({
        albums: JSON.parse(data)
      });
    }.bind(this));
  }
});
module.exports = CollectionComponent;