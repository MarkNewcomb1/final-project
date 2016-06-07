var React = require("react");
var AlbumComponent = React.createClass({
_handleClick: function(evt){
        evt.preventDefault();
    //post jquery props.data.id to collection, push into array
        console.log("You clicked!");
    },
    render: function(){
        if (!this.props.data){
            return null;
        }
        return (
            <figure onClick={this._handleClick}>
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
