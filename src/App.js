import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import VideoPlayerPage from './Pages/VideoPlayerPage/videoPlayer';
import VideoUpload from './Pages/VideoUpload/VideoUploadPage';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<VideoPlayerPage />} />
          <Route path="/upload" element={<VideoUpload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
