var React = require("react");
var Message = require("./Message.jsx");
var MessageForm = require('./MessageForm.jsx');
var Discogs = require('disconnect').Client;
var VinylApp = React.createClass({
	render: function() {
		var messages = this.state.messages;
		var messageHTML = [];
		for(var i = 0; i < messages.length; i++){
			messageHTML.push(<Message key={i} text={messages[i]} />);
		}
		return (<div>
			{messageHTML}
			<MessageForm getMessages={this.getMessages}/>
		</div>);
	},
	getInitialState: function(){
		var stateObj = {
			messages: []
		};
		return stateObj;
	},
	getMessages: function() {
		var that = this;
		$.get('/messages', function(result) {
			that.setState({
				messages: result
			});
		}, 'json');
	},
	componentDidMount: function() {
		this.getMessages();
        var dis = new Discogs().setConfig({outputFormat: 'html'});
        var db = new Discogs().database();
        db.getRelease(176126, function(err, data){
            return (<div>(data)</div>);
});
	}
});

module.exports = VinylApp;





