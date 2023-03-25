import React from "react";
import { LinearProgress, Paper } from "@mui/material";

function List({ loading, contacts }) {
  console.log(contacts);
  return (
    <>
      <Paper style={styles.paper}>
        {loading ? (
          <LinearProgress />
        ) : (
          contacts.data.map((contact) => {
            return (
              <div
                key={contact.id}
                style={{
                  display: "flex",
                }}
              >
                <img
                  src={contact.picture}
                  alt={contact.firstName}
                  style={styles.image}
                />
                <div>
                  <h5>{contact.title.toUpperCase()}</h5>
                  <h4
                    style={{ alignSelf: "center" }}
                  >{` ${contact.firstName} ${contact.lastName}`}</h4>
                </div>
              </div>
            );
          })
        )}
      </Paper>
    </>
  );
}

export default List;

const styles = {
  paper: {
    margin: `${20}px auto`,
    padding: `${20}px`,
    maxWidth: `${350}px`,
    position: "relative",
    backgroundColor: "pink",
  },

  image: {
    width: `${70}px`,
    borderRadius: `${50}%`,
    margin: `${10}px ${20}px ${0} ${0}`,
  },
};
