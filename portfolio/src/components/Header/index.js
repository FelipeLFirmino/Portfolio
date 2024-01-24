import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Link, Icon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* menu */}
          <Grid container alignItems={"center"} spacing={3} paddingLeft={4} sx={{
            display:{
              xxs:"none",
              xs:"none",
              sm:"flex",
              md:"flex"
              
            }
          }}>
            <Grid item>
              <Typography variant="regularwords" component="h4">
                Felipe Firmino
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="headerwords" component="h6">
                Home
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="headerwords" component="h6">
                sobre mim
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="headerwords" component="h6">
                projetos
              </Typography>
            </Grid>
          </Grid>
          {/* icons */}
          <Grid
            container
            alignItems={"center"}
            justifyContent={"flex-end"}
            spacing={2}
            paddingRight={4}
          >
            <Grid item>
              <Icon>
                <Link
                  href="https://github.com/FelipeLFirmino"
                  target="_blank"
                  rel="noopener"
                >
                  <GitHubIcon color="secondary"></GitHubIcon>
                </Link>
              </Icon>
            </Grid>
            <Grid item>
              <Icon>
                <Link
                  href="https://www.linkedin.com/in/felipe-firmino-646aa0213/"
                  target="_blank"
                  rel="noopener"
                >
                  <LinkedInIcon color="secondary"> </LinkedInIcon>
                </Link>
              </Icon>
            </Grid>
            <Grid item>
              <Icon>
                <Link
                  href="mailto:lipe19x@gmail.com"
                  target="_blank"
                  rel="noopener"
                >
                  <MailIcon color="secondary"></MailIcon>
                </Link>
              </Icon>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
