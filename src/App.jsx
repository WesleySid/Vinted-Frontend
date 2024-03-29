import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
// routes
import Main from "./assets/Main";
import Offer from "./assets/Offer";
import Signup from "./assets/Signup";
import Login from "./Login";
import Publish from "./assets/Publish";
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
          <Route path="/publish" element={<Publish></Publish>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
