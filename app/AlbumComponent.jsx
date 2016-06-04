var React = require("react");
var AlbumComponent = React.createClass({

    render: function(){
        console.log(this.props);
        if (!this.props.currentAlbumData){
            return null;
        }
        return (
            <div>
         {this.props.currentAlbumData.artist}
         {this.props.currentAlbumData.title}
         {this.props.currentAlbumData.year}
         <img src={this.props.currentAlbumData.thumb}/>
        </div>
        );
    }
});

//this is the last place the data goes



module.exports = AlbumComponent;
