var React = require("react");
var AlbumComponent = require('./AlbumComponent.jsx');
var AlbumsComponent = React.createClass({
    render: function() {
        console.log(this.props.ada);
        var that = this;
        console.log("Albums");
        console.log(that.props);
        return (
            <div>
                {this.props.ada.map(function(d, index){
                    return (<AlbumComponent data={d} key={index} refresh={that.props.refresh} />)
                })}
            </div>
        )
    }

});
module.exports = AlbumsComponent;