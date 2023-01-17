import './App.css';
import NavBar from "./NavBar"
import Reviews from "./Reviews"
import Submissions from './Submissions';
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

  function onReviewDelete(id) {
    const updatedReviews = reviews.filter(review => review.id !== id)
    setReviews(updatedReviews);
  }


  return (
    <div >
      <NavBar />
      <Routes>
          <Route path="/reviews" element={<Reviews reviews={reviews} onReviewDelete={onReviewDelete} />} />
          <Route path="/submissions" element={<Submissions/>} />
      </Routes>
    </div>
  );
}

export default App;
