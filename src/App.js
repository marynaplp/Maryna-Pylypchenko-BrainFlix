import './App.css';
import React,{useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from './components/Header/Header';
import Home from "./Pages/Home";
import VideoDetailsPage from './Pages/VideoDetailsPage';
import VideoUpload from './Pages/VideoUploadPage';


function App() {

  return (

    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/video/:videoId" component={VideoDetailsPage}></Route>
          <Route path="/upload" component={VideoUpload}></Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
