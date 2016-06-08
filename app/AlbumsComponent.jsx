var React = require("react");
var AlbumComponent = require('./AlbumComponent.jsx');
var AlbumsComponent = React.createClass({
    render: function() {
        console.log(this.props.ada);
        return (
            <div>
                {this.props.ada.map(function(d, index){
                    return (<AlbumComponent data={d} key={index}/>)
                })}
            </div>
        )
    }

});
module.exports = AlbumsComponent;