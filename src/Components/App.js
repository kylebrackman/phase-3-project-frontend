import './App.css';
import NavBar from "./NavBar"
import Reviews from "./Reviews"
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";


function App() {
  
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [])


  return (
    <div >
      <NavBar />
      <Routes>
          <Route path="/reviews" element={<Reviews reviews={reviews}/>} />
      </Routes>
    </div>
  );
}

export default App;
