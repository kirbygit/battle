var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

// React component
class App extends React.Component {
  render() {
    return (
      <div>Welcome Friends!</div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
