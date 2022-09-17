import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const large = document.querySelector(".circle-large");
    const minus = document.querySelector(".circle-minus");
    document.body.addEventListener("mousemove", (e) => {
      large.style.top = e.pageY + "px";
      large.style.left = e.pageX + "px";
      large.style.transform = "translate(-50%, -50%)";

      minus.style.top = e.pageY + "px";
      minus.style.left = e.pageX + "px";
      minus.style.transform = "translate(-50%, -50%)";
    });

    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", () => {
        large.classList.add("hovered");
      });

      link.addEventListener("mouseleave", () => {
        large.style.transition = ".3s ease-out";
        large.classList.remove("hovered");
      });
    });
  }, []);

  return (
    <div className="mouse">
      <span className="circle-large"></span>
      <span className="circle-minus"></span>
    </div>
  );
};

export default Mouse;
