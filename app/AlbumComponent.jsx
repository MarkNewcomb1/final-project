var React = require("react");
var data = require('./data.js');
var AlbumComponent = React.createClass({

    render: function(){
        return (
            <div>
         {JSON.stringify(data, null, 2) }
        </div>
        );
    }
});

module.exports = AlbumComponent;
