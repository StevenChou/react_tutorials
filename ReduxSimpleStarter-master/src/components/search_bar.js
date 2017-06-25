import React, { Component } from 'react'; // translate the JSX to normal Javascript

// const SearchBar = () => {
//   return <input />;  // React.createElement
// }

class SearchBar extends Component {
  constructor(props) { // 當建立 instance 時，會被呼叫[初始化物件]
    super(props);

    this.state = { term: '' };
  }

  render() {
    // return (
    //   <input onChange={this.onInputChange}/>
    // );

    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        {/*
          Value of the input: {this.state.term}
          */
        }
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;