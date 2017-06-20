var React = require('react');
var Popular = require('./Popular');

// state
// lifecycle event
// UI

// React component
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

// export App.js
module.exports = App;
