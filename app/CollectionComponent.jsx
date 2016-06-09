var React = require("react");
var AlbumComponent = require('./AlbumComponent.jsx');
var AlbumsComponent = require('./AlbumsComponent.jsx');
var Link = require('react-router').Link;
var CollectionComponent = React.createClass({
    //componentdidmount will get array from server, 
    
    //set array into state here and have render bound to that state
    render: function() {
        console.log(this._getAlbumsFromServer);
        return (
            <div>
              <Link className="link" to="/">Back to Search</Link>
               <AlbumsComponent ada={this.state.albums} refresh={this._getAlbumsFromServer} />
            </div>
        )
    },
    getInitialState: function(){
		var obj = {
			albums: []
		};
		return obj;
	},
    _getAlbumsFromServer: function(){
        console.log("in collection component");
         this.serverRequest = $.get("/collection", function (data) {
      this.setState({
        albums: JSON.parse(data)
      });
    }.bind(this));
  },
componentDidMount: function() {
   this._getAlbumsFromServer();
    }
});
module.exports = CollectionComponent;