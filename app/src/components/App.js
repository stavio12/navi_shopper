import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Homepage from "./New/Homepage";
import Men from "./Men/Men";
import Women from "./women/Women";
import Wholesale from "./Wholesale/Wholesale";
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
