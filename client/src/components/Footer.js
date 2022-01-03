import * as React from "react";
import { useState, useEffect } from "react";
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
      <Link color="inherit" href="https://mui.com/">
        Random Bazaar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const [totalNumberItems, setTotalNumberItems] = useState("1");
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
                Square Bazaar is a market place to share goods with your
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

            <Grid item md={8} style={{ textAlign: "center" }}>
              <Typography variant="body1">Categories</Typography>
              <Typography variant="body2">Vehicles</Typography>
              <Typography variant="body2">Art</Typography>
              <Typography variant="body2">Games</Typography>
              <Typography variant="body2">Books</Typography>
              <Typography variant="body2">Electronics</Typography>
              <Typography variant="body2">Furniture</Typography>
            </Grid>
            <Copyright item md={12} />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
