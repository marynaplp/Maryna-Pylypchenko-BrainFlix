import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import VideoDetailsPage from './Pages/VideoDetails/VideoDetailsPage';
import VideoUpload from './Pages/VideoUpload/VideoUploadPage';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<VideoDetailsPage />} />
          <Route path="/upload" element={<VideoUpload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
