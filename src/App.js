import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="relative w-full bg-[#f7f5f5]">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
