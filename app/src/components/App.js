import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Navs/Nav";
import Footer from "./Footer";
import Homepage from "./New/Homepage";
import Men from "./Men/Men";
import Women from "./women/Women";
import Wholesale from "./Wholesale/Wholesale";
import MenViewed from "./Men/MenViewed";
import Login from "./Account/Login";
import Register from "./Account/Register";

function App() {
  return (
    <>
      <Router>
        <Nav />

        {/* <Men /> */}
        <Route path="/" exact component={Homepage} />
        <Route path="/men" exact component={Men} />
        <Route path="/women" exact component={Women} />
        {/* <Route path="/wholesale" exact component={Wholesale} /> */}
        <Route path="/viewItem" exact component={MenViewed} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <Footer />
      </Router>
    </>
  );
}

export default App;
