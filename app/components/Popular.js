var React = require('react');
var PropTypes = require('prop-types');

// stateless functional component
function SelectLanguage(props) {
  var languages = ['All', 'Javascript', 'Ruby', 'C++', 'Java', 'Python', 'CSS'];

  return (
    <ul className='languages'>
      {/* new context of {languages.map((lang) => { */}
      {languages.map(function(lang) {
        return (
          <li
            style= {lang === props.selectedLanguage ? { color: '#d0021b'}: null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor (props) {
    super(props);
    // initialize state
    this.state = {
      // defaulted language state
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}/>
      </div>
    )
  }
}

// export Popular.js
module.exports = Popular;
