import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, 
         Route } from "react-dom";

function App() {
    return (
      <div className="App">
           <Router>
              <Header />

                <Switch>
                         <Route path="/search/:searchTerm">
                              <div className="app_page">
                                    <sibebar />
                                    <SearchPage />
                              </div>
                         </Route>
                         <Route path="/">
                              <div className="app__page">
                                   <Sidebar />
                                   <RecommendedVideos />
                              </div>
                         </Route>
                 </Switch>
            </Router>

             {/* 
             <Header />   
             <div className="app__page">
                    <Sidebar />
                    <RecommendedVideos />
             </div>          
             */}
      </div>
    );
}

export default App;
