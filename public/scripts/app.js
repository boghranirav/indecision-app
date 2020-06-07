'use strict';

console.log('App.js file is running.');

// JSX- JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This my P!'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
