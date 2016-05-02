import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import Geosuggest from 'react-geosuggest';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.location);
    this.setState({ term: event.location });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log("form has been submitted");
    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
    <div className="col-xs-8">
      <form onSubmit={this.onFormSubmit} className="input-group">
      <Geosuggest
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          onSuggestSelect={this.onInputChange}/>
          <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
