import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://alexcontell.com/">
        Random Bazaar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const [totalNumberItems, setTotalNumberItems] = useState("1");
  const [category_id, setCategory_id] = useState("");
  const history = useHistory();

  const handleClick = (category_id) => {
    history.push({
      pathname: "/category",
      state: category_id,
    });
  };
  const handleClickArea = (location_id) => {
    history.push({
      pathname: "/location",
      state: location_id,
    });
  };
  useEffect(() => {
    fetch("/items/count/total", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((total) => {
          setTotalNumberItems(total);
        });
      }
    });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "75vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 10,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item md={4}>
              <Typography variant="body1">
                Random Bazaar is a market place to share goods with your
                community. Donate, borrow or sell your goods with our platform.
              </Typography>
              {setTotalNumberItems ? (
                <p>
                  Currently working with {totalNumberItems} items in our
                  platform
                </p>
              ) : (
                <p>not showing count</p>
              )}
            </Grid>

            <Grid item md={4} style={{ textAlign: "justify" }}>
              <Typography variant="body1">Categories</Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(1);
                }}
              >
                Vehicles
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(2);
                }}
              >
                Art
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(3);
                }}
              >
                Games
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(4);
                }}
              >
                Books
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(5);
                }}
              >
                Electronics
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(6);
                }}
              >
                Furniture
              </Typography>
            </Grid>
            <Grid item md={4} style={{ textAlign: "justify" }}>
              <Typography variant="body1">Areas</Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickArea(1);
                }}
              >
                Manhattan
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickArea(2);
                }}
              >
                Brooklyn
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickArea(3);
                }}
              >
                Queens
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickArea(4);
                }}
              >
                Bronx
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickArea(5);
                }}
              >
                Staten Island
              </Typography>
            </Grid>
            <Copyright item md={12} />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
