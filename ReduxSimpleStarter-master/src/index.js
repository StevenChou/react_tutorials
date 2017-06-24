// import lib
import React from 'react';  // 建立或管理 component
import ReactDOM from 'react-dom'; // 與真實 DOM 的互動

// import javascript file
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyC4CjWqlAmeWXGRpvGuyvFAv-54mEuZiwc';

// Create a new component. This component should produce 
// some HTML
// const App = function() {
//   return <div>Hi!</div>;
// }

// const App = () => {
//   return <div>Hi</div>;
// }

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// const is ready only
// App = 5;



// Take this component's generated HTML and put it 
// on the page(in the DOM)

// ** App  ===> This is a class of component 
//<App /> is a instance
ReactDOM.render(<App />, document.querySelector('.container'));