var React = require("react");
var AlbumComponent = React.createClass({
    getInitialState: function(){
        return {
            selected: false
        }
    },
_handleClick: function(evt){
    evt.preventDefault();
            this.setState({
            selected: !this.state.selected
        });
//    $(evt.target).parents("figure").addClass('selected');
    console.log(this);
    var that = this;
    console.log(that.props);
	$.post('/collection',{album:this.props.data.id},function (res){
		//takes in a res
        console.log("What's going on?");
        that.props.refresh();
	});
    },
    componentWillReceiveProps: function(nextProps){
        if (nextProps.data.id !== this.props.data.id){
            this.setState({
                selected: false
            })
        }
    },
    render: function(){
        if (!this.props.data){
            return null;
        }
        return (
        <figure className={this.state.selected ?"selected":""} onClick={this._handleClick}>
        {this.props.data.release_id}
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
