var React = require("react");
var AlbumComponent = React.createClass({

    render: function(){
        if (!this.props.data){
            return null;
        }
        return (
            <div>
         {this.props.data.artist}
         {this.props.data.title}
         {this.props.data.year}
         <img src={this.props.data.thumb}/>
        </div>
        );
    }
});

//this is the last place the data goes



module.exports = AlbumComponent;
