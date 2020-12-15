import React from "react";
import "./Characters.css";

const Characters = ({ src, extension, name, id, obj }) => {
  return (
    <div
      className="neumorphic"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "10px",
        margin: "10px",
        cursor: "pointer",
        height: "250px",
        width: "200px",
        overflow: "hidden",
      }}
      onClick={() => {
        console.log("Clicked");
        console.log(
          obj.description.length !== 0
            ? obj.description
            : "No Description Found!!"
        );
      }}
    >
      <img
        src={src + "." + extension}
        alt={name}
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "10px 10px 0 0",
        }}
      />
      <p style={{ margin: "5px", fontsize: "18px", fontWeight: "bold" }}>
        {name}
      </p>
    </div>
  );
};

export default Characters;
