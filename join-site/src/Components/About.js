import React from "react";
import hero from "./images/Hero-Image.png";

export default function About() {
  return (
    <div className="d-flex justify-content-between px-5 py-5 text-bg-dark">
      <div>
        <p className="fs-1">Our Aim</p>
        <p className="fs-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, minus
          officia? Sed harum numquam assumenda et quos impedit magni, expedita
          suscipit totam obcaecati nesciunt. Consequuntur sapiente modi aliquam
          eveniet accusantium molestiae totam, suscipit ut, dignissimos alias
          ipsa doloremque debitis. Sed aperiam saepe, asperiores laborum
          dolorem, sequi eum perspiciatis praesentium quo voluptate quod qui
          accusamus nisi? Rem, illo repellat.
        </p>
      </div>
      <div>
        <img src={hero} alt="" />
      </div>
    </div>
  );
}
