var React = require('react');
var ReactDom = require('react-dom');
var CollectionComponent= require('./CollectionComponent.jsx');
var VinylApp = require('./VinylApp.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
ReactDom.render(<Router history={browserHistory}> 
                <Route path="/" component={VinylApp}/>
                <Route path="/collection" component={CollectionComponent}/>
                </Router>, document.getElementById('app'));