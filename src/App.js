import './App.css';
import React,{useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom"
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import VideoDetailsPage from './Pages/VideoDetails/VideoDetailsPage';
import VideoUpload from './Pages/VideoUpload/VideoUploadPage';


function App() {

  return (

   
      <div>
        <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          < Route path="/video/:videoId" element={ <VideoDetailsPage />}/>
          <Route path="/upload" element ={< VideoUpload />}/>

        </Routes>
        </BrowserRouter> 
      </div>
    
  );
}

export default App;
