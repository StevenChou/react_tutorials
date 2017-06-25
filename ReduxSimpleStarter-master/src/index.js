// import lib
import React, { Component } from 'react';  // 建立或管理 component
import ReactDOM from 'react-dom'; // 與真實 DOM 的互動
import YTSearch from 'youtube-api-search';

// import javascript file
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyC4CjWqlAmeWXGRpvGuyvFAv-54mEuZiwc';

// Create a new component. This component should produce 
// some HTML
// const App = function() {
//   return <div>Hi!</div>;
// }

// const App = () => {
//   return <div>Hi</div>;
// }

// ** App is a functional component **
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       videos: [],
       selectdVideo: null  
    };
    
    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
      // this.setState({ videos: videos });
      // console.log('resp:', videos);
      this.setState({ 
        videos,
        selectdVideo: videos[0]
      });
    });    
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectdVideo} />
        <VideoList
          onVideoSelect={selectdVideo => this.setState({selectdVideo})}
          videos={this.state.videos} />        
      </div>
    );
  }
}




// const is ready only
// App = 5;



// Take this component's generated HTML and put it 
// on the page(in the DOM)

// ** App  ===> This is a class of component 
//<App /> is a instance
ReactDOM.render(<App />, document.querySelector('.container'));