import React from "react";
import Sidebar from "./Sidebar";

function Account() {
  return (
    <div>
      <Sidebar />
      <div
        style={{
          marginLeft: "120px",
          marginTop: "-20px",
        }}
      >
        <h1>Account</h1>
      </div>
    </div>
  );
}

export default Account;
