import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
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
import { useState } from "react";
import CheckoutForm from "./assets/CheckoutForm";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState("");
  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove(token);
      setToken(null);
    }
  };
  return (
    <>
      <Router>
        <Header
          token={token}
          search={search}
          handleToken={handleToken}
          setSearch={setSearch}
        ></Header>
        <Routes>
          <Route path="/" element={<Main search={search}></Main>}></Route>
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/publish" element={<Publish token={token}></Publish>} />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route path="/payment" element={<CheckoutForm />} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
