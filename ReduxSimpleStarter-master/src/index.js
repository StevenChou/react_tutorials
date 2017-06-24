import React from 'react';  // 建立或管理 component
import ReactDOM from 'react-dom'; // 與真實 DOM 的互動

// Create a new component. This component should produce 
// some HTML
// const App = function() {
//   return <div>Hi!</div>;
// }

// const App = () => {
//   return <div>Hi</div>;
// }

const App = () => <div>Hi!</div>

// const is ready only
// App = 5;



// Take this component's generated HTML and put it 
// on the page(in the DOM)

// ** App  ===> This is a class of component 
//<App /> is a instance
ReactDOM.render(<App />, document.querySelector('.container'));