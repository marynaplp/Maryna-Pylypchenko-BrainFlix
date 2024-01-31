import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header/Header';
//import Home from "./Pages/Home/Home";
//import VideoDetails from "./Pages/Video-details/video-details";
import VideoUpload from './Pages/Video-upload/video-upload';
import VideoPage from './Pages/Video-page/video-page';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<VideoPage />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
          <Route path="/upload" element={<VideoUpload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
