
import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);
  const recentItem = (topic) => (
      <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
      </div>
  )

    return (
    <div className="sidebar"> 
  <div className="sidebar__top">
      <img src="https://images.unsplash.com/photo-1464660439080-b79116909ce7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
      <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
      <h2>{user.displayName}</h2>
      <h4>{user.email}</h4>
  </div>
  <div className="sidebar__stats">
     <div className="sidebar__stat">
      <p>Who viewed you</p>
      <p className="sidebar__statNumber"> 2,345  </p>
     </div>
     <div className="sidebar__stat">
     <p>Views on post </p>
      <p className="sidebar__statNumber"> 1,345  </p>
     </div>
    </div>
    <div className="sidebar__bottom">
      <p> Recent</p>
      
      {recentItem("Reactjs")}
      {recentItem("Programming")}
      {recentItem("SoftwareEngineering")}
      {recentItem("Design")}
      {recentItem("Developer")}
    </div>
    </div>
    );   
}

export default Sidebar;
