var React = require("react");
var data = require('./data.js');
var AlbumComponent = React.createClass({


    render: function(){
        return (
            <div>
          {this.props.data}
        </div>
        );
    }
});

module.exports = AlbumComponent;
