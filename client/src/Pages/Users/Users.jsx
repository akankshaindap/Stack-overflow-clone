import React from "react";
import { useLocation } from "react-router";
import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  const location=useLocation()
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        {
        location.pathname==='/Users'?
      
        <UsersList />:
        <></>
}
      </div>
    </div>
  );
};

export default Users;
