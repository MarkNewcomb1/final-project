var React = require("react");
var SearchComponent = React.createClass({
    _handleSubmit: function(evt){
        evt.preventDefault();
        this.props.performAlbumSearch($("#artist").val());
    },
    render: function(){
    return (
            <form className="searchForm" onSubmit={this._handleSubmit}>
            <input type="text" id="artist" />
            <input type="submit" value="Let's Go!" />
            </form>
    );    
    }
    
});

module.exports = SearchComponent;