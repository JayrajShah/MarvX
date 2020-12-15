import React from "react";

const Backdrop = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "2",
        position: "fixed",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          zIndex: "4",
          color: "#ffffff",
        }}
      >
        Loading...
      </h1>
    </div>
  );
};

export default Backdrop;
