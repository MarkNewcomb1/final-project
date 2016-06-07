var React = require("react");
var AlbumComponent = require('./AlbumComponent.jsx');
var AlbumsComponent = require('./AlbumsComponent.jsx');
var CollectionComponent = React.createClass({
    //componentdidmount will get array from server, 
    
    //set array into state here and have render bound to that state
    render: function() {
        return (
            <div>
               HELLO? 
            </div>
        )
    }

});
module.exports = CollectionComponent;