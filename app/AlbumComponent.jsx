var React = require("react");
var data = require('./data.js');
var AlbumComponent = React.createClass({


    render: function(){
        return (
            <div>
          {data.toString()}
        </div>
        );
    }
});

module.exports = AlbumComponent;
