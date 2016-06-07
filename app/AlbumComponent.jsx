var React = require("react");
var AlbumComponent = React.createClass({

    render: function(){
        if (!this.props.data){
            return null;
        }
        return (
            <figure>
         <img src={this.props.data.thumb}/>
         <figcaption>
         <span class="title">{this.props.data.artist}
         {this.props.data.title}</span>&nbsp;
         {this.props.data.year}
         </figcaption>
        </figure>
        );
    }
});

//this is the last place the data goes



module.exports = AlbumComponent;
