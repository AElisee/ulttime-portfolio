import React from "react";

const Totop = () => {
  window.addEventListener("scroll", () => {
    // scroll to top btn displaying
    const toTopBtn = document.getElementById("toTopBtn");
    let scrollValue =
      (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValue > 0.59) {
      toTopBtn.style.visibility = "visible";
    } else {
      toTopBtn.style.visibility = "hidden";
    }
  });
  return (
    <div>
      <span
        className="hover"
        id="toTopBtn"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src="./icons/arrow-icon.svg" alt="arrow-up-circle" />
      </span>
    </div>
  );
};

export default Totop;
