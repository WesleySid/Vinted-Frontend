import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
// routes
import Main from "./assets/Main";
import Offer from "./assets/Offer";
import Signup from "./assets/Signup";
import Login from "./Login";
//components
import Header from "./assets/Header";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
