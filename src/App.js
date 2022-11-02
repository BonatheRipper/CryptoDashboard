import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [sidemenu, setSidemenu] = useState(false);
  return (
    <div className="relative w-full bg-[#f7f5f5]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Sidebar sidemenu={sidemenu} setSidemenu={setSidemenu} />
      <Navbar sidemenu={sidemenu} setSidemenu={setSidemenu} />
      <Dashboard />
    </div>
  );
};

export default App;
