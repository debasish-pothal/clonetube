import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super();
  }

  onInputChange = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.onSearchVideo(event.target.value);
    }
  }

  render() {
    return(
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div className="container">
          <h2 className="navbar-brand" href="javascript:void(0)">CloneTube</h2>
          <form className="form-inline">
            <input className="form-control mr-sm-2" placeholder="Search" type="text"
              onKeyPress={(event) => this.onInputChange(event)}
              style={{marginRight: '0 !important'}} />
          </form>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
