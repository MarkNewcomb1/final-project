var React = require("react");
var AlbumComponent = require('./AlbumComponent.jsx');
var AlbumsComponent = React.createClass({
    render: function() {
        
        for (var i = 0; i < 5; i++){
        
        return (
            <div>
                <AlbumComponent />
            </div>
        )
        }
    }
    
    
    
});
module.exports = AlbumsComponent;