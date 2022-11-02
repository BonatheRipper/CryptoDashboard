import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [sidemenu, setSidemenu] = useState(false);
  return (
    <div className="relative w-full bg-[#f7f5f5]">
      <Sidebar sidemenu={sidemenu} setSidemenu={setSidemenu} />
      <Navbar sidemenu={sidemenu} setSidemenu={setSidemenu} />
      <Dashboard />
    </div>
  );
};

export default App;
