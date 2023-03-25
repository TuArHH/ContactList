import React from "react";
import propTypes from "prop-types";
import Paper from "@mui/material/Paper";
import logo from "../assets/contactLogo.jpg";

function Header({ title }) {
  return (
    <Paper elevation={3} square style={styles.paper}>
      <img src={logo} alt={"Header Logo"} style={styles.headerLogo} />
      {title && <h1 style={styles.h1}>{title}</h1>}
    </Paper>
  );
}

export default Header;

const styles = {
  h1: {
    margin: 0,
    fontFamily: "cursive",
    Color: "blue",
    alignItems: "center",
    marginTop: `${1}rem`,
  },
  paper: {
    padding: `${10}px`,
    display: "flex",
    justifyContent: "space-evenly",
  },
  headerLogo: {
    width: `${60}px`,
  },
};

Header.propTypes = {
  title: propTypes.string,
};
