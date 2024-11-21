import React from "react";
import { Sidebardata } from "./Sidebardata/";
import "../App.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {Sidebardata.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div>{val.icon}</div>
              <div>{val.title}</div>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
}

export default Sidebar;
