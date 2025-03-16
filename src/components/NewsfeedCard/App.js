import React from 'react';
import NewsFeed from './components/NewsFeed'; // Mock version
// import NewsFeedAPI from './components/NewsFeedAPI'; // API version

function App() {
  return (
    <div className="App">
      <h1>Latest News</h1>
      <NewsFeed /> {/* Switch to NewsFeedAPI for API version */}
    </div>
  );
}

export default App;