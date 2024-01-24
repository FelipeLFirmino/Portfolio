import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Container, Grid, Typography } from "@mui/material";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import Myimage from "../../images/fotoavatar.jpg";
import MailIcon from "@mui/icons-material/Mail";

import "./index.css";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 5, bgcolor: "#0a192f" }}>
      <Grid
        container={"true"}
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Grow in timeout={1000}>
            <Avatar
              src={Myimage}
              alt="my image"
              sx={{ width: {xxs:"15rem", xs: "17rem", sm: "20rem", md: "20rem",xl:"40rem" }, height: { xxs:"15rem",xs: "17rem", sm: "20rem", md: "20rem",xl:"40rem" } }}
            ></Avatar>
          </Grow>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {/* intro title */}
            <Grid item>
              <Box className="typewriter">
                <Typography
                  variant="regularwords"
                  component={"h2"}
                  textAlign={"center"}
                  margin={"6px"}
                 
                  sx={{ fontSize: {xxs:"0.8rem", xs: "1rem", sm: "1.5rem", md: "2rem",xl:"4rem" } }}
                >
                  Olá, meu nome é
                  <Typography variant={"highlighted"} component={"span"}>
                    {" "}
                    Felipe Firmino.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            {/* intro text */}
            <Grid item>
              <Grow in timeout={3500}>
                <Container maxWidth="sm">
                  <Typography
                    variant="regularwords"
                    component={"h4"}
                    paragraph
                    textAlign={"center"}
                    sx={{ fontSize: {xxs:"0.8rem", xs: "0.9rem", sm: "1rem", md: "1rem",xl:"3.5rem" } }}
                  >
                    Bem-vindo ao meu portfolio! Aqui, compartilho minha jornada
                    e paixão por tecnologia. Estou animado para enfrentar novos
                    desafios e contribuir para um mundo digital mais inovador.
                    Vamos juntos explorar as possibilidades!
                  </Typography>
                </Container>
              </Grow>
            </Grid>
          </Grid>
        </Grid>
        {/* intro button */}
        <Grid item>
          <Grow in timeout={4000}>
            <Button
              color="contrastText"
              variant="outlined"
              href="mailto:lipe19x@gmail.com"
            >
              <Grid
                container
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                spacing={1}
              >
                <Grid item>
                  <Typography variant="highlighted" component={"h4"}>
                    fale comigo
                  </Typography>
                </Grid>
                <Grid item>
                  <MailIcon color="contrastText"></MailIcon>
                </Grid>
              </Grid>
            </Button>
          </Grow>
        </Grid>
      </Grid>
    </Box>
  );
}
