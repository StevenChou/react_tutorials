import React, { Component } from 'react'; // translate the JSX to normal Javascript

// const SearchBar = () => {
//   return <input />;  // React.createElement
// }

class SearchBar extends Component {
  render() {
    // return (
    //   <input onChange={this.onInputChange}/>
    // );

    return (
      <input onChange={event => console.log('arrow funtion',event.target.value)} />
    );
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;