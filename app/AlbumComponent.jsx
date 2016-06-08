var React = require("react");
var AlbumComponent = React.createClass({
_handleClick: function(evt){
    evt.preventDefault();
    $(evt.target).parents("figure").addClass('selected');
    console.log(this);
	$.post('/collection',{album:this.props.data.id},function (res){
		//takes in a res
        
	});
    },
    render: function(){
        if (!this.props.data){
            return null;
        }
        return (
        <figure onClick={this._handleClick}>
        {this.props.data.id}
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
