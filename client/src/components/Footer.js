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
      <Link color="inherit" href="https://google.com/">
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
  const handleClickType = (type_id) => {
    history.push({
      pathname: "/item-type",
      state: type_id,
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
          py: 2,
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
            <Grid item md={12}>
              {setTotalNumberItems ? (
                <p style={{ textAlign: "center", marginBottom: "10px" }}>
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
                style={{ cursor: "pointer" }}
              >
                Vehicles
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(2);
                }}
                style={{ cursor: "pointer" }}
              >
                Art
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(3);
                }}
                style={{ cursor: "pointer" }}
              >
                Games
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(4);
                }}
                style={{ cursor: "pointer" }}
              >
                Books
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(5);
                }}
                style={{ cursor: "pointer" }}
              >
                Electronics
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClick(6);
                }}
                style={{ cursor: "pointer" }}
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
                style={{ cursor: "pointer" }}
              >
                Manhattan
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickArea(2);
                }}
                style={{ cursor: "pointer" }}
              >
                Brooklyn
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickArea(3);
                }}
                style={{ cursor: "pointer" }}
              >
                Queens
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickArea(4);
                }}
                style={{ cursor: "pointer" }}
              >
                Bronx
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickArea(5);
                }}
                style={{ cursor: "pointer" }}
              >
                Staten Island
              </Typography>
            </Grid>
            <Grid item md={4} style={{ textAlign: "justify" }}>
              <Typography variant="body1">Item Types</Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickType(1);
                }}
                style={{ cursor: "pointer" }}
              >
                Sell
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickType(2);
                }}
                style={{ cursor: "pointer" }}
              >
                Trade
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickType(3);
                }}
                style={{ cursor: "pointer" }}
              >
                Borrow
              </Typography>
              <Typography
                variant="body2"
                onClick={() => {
                  handleClickType(4);
                }}
                style={{ cursor: "pointer" }}
              >
                Donate
              </Typography>
            </Grid>
            <Copyright item md={12} />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
