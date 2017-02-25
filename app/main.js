let React = require('react');
let ReactDOM = require('react-dom');
let AppComponent = require('./components/tab');
ReactDOM.render(<AppComponent />, document.getElementById('content'));

let EchartComponent = require('./components/echart');
ReactDOM.render(<EchartComponent />, document.getElementById('echart'));
