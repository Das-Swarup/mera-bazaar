import React from "react";
import hero from "./images/Hero-Image.png";

export default function Hero() {
  return (
    <>
    <center className="mx-auto" style={{ width: "100%" }}>
      <p className="fs-1">
        Do you want to start a business, but do have experience or doubt?
        <p className="fs-1">We invite you to cooperate.</p>
      </p>
      <button
        type="button"
        className="btn btn-dark px-4 py-2 fs-5"
        style={{ color: "white" }}
      >
        Explore
      </button>
    </center>
    </>
  );
}
