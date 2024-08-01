import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../Context/AuthProvider";
import './Logout.css'

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null); // Setting state to null
      toast.success("Logout Successful");
      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return ( 
    <div className="w-[50px] h-[50px]">
    <button
     
      onClick={handleLogout}
    >
      LOGOUT
    </button>
  </div>
  );
}

export default Logout;
