import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar.js";
import MyCard from "./component/MyCard.js";
import { getMatches } from "./api/api.js";
import { Container, Grid, Typography } from "@material-ui/core";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar>
        <h2>Live Cricket</h2>
      </Navbar>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard match={match}></MyCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
