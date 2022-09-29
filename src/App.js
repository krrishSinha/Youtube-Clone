import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import ChannelPage from "./components/ChannelPage";
import VideoPage from "./components/VideoPage";
import SearchPage from "./components/SearchPage";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#EDEADE', minHeight: '100vh', overflowX: 'hidden' }} >
      <Navbar />
      <Routes>
      <Route path="/" exact element={ <Feed/> } />
      <Route path="/video/:id" exact element={ <VideoPage/> } />
      <Route path="/search/:searchTerm" exact element={ <SearchPage /> } />
      <Route path="/channel/:id" exact element={ <ChannelPage/> } />
      </Routes>
    </div>
  );
}

export default App;
