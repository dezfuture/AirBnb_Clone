import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
