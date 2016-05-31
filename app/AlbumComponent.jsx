var React = require("react");
var AlbumComponent = React.createClass({

    render: function(){
        console.log(this.props);
        return (
            <div>
         {this.props.currentAlbumData.artist}
         {this.props.currentAlbumData.title}
         {this.props.currentAlbumData.year}
        </div>
        );
    }
});

module.exports = AlbumComponent;
