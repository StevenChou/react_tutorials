import React, { Component } from 'react'; // translate the JSX to normal Javascript

// const SearchBar = () => {
//   return <input />;  // React.createElement
// }

class SearchBar extends Component {
  render() {
    return (
      <input value="hi!!"/>
    );
  }
}

export default SearchBar;