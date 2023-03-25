import React from "react";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-white " style={styles.span}>
      Copyright
      <FaCopyright className="mx-2" />
      {calcurrentYear()}
      <span className="mx-3"> createdBy Tugrul Arslan</span>
    </div>
  );
}

// calculate the currenyear
const calcurrentYear = () => {
  const date = new Date();
  date.getFullYear();
  return date.getFullYear();
};

export default Footer;

const styles = {
  span: {
    fontSize: `${1.65}rem`,
    color: "#fff",
    opacity: 0.88,
    position: "absolute",
    bottom: `${15}px`,
    display: "flex",
    width: `${100}%`,
    justifyContent: "center",
  },
};
