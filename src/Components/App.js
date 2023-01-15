import './App.css';
import NavBar from "./NavBar"
import Reviews from "./Reviews"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div >
      <NavBar />
      <Routes>
          <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
