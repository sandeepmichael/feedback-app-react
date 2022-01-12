import React from "react";
import {BrowserRouter,  Route, Routes, } from 'react-router-dom'
import Feedbacklist from "./components/Feedbacklist";
import { FeedbackProvider } from "./context/FeedbackContext";

import Header from "./components/Header";
import Feedbackstats from "./components/Feedbackstats";
import Feedbackform from "./components/Feedbackform";
import AboutPage from "./components/Aboutpage";





function App() {








  return (
    <FeedbackProvider>
      <BrowserRouter>
       <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element = {
            <>
               <Feedbackform  />
               <Feedbackstats />
            <Feedbacklist />
            </>
           } />
      
     </Routes>
          <Routes>
           <Route  path='/about' element={<AboutPage />} />
          </Routes>
       
       </div>
     </BrowserRouter>
      
    </FeedbackProvider>
  );
}

export default App;
