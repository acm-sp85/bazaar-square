import * as React from "react";
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {/* <Container component="main" sx={{ mt: 1, mb: 1 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container> */}
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
                Square Bazaar is a market place to share items with your
                community. Donate, borrow or sell your items with our platform.
              </Typography>
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
