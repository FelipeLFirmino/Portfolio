import * as React from "react";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";
import Myimage from "../../images/fotoavatar.jpg";

export default function About() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 7, bgcolor: "#0a192f" }}>
      <Container sx={{ textAlign: "left", marginLeft: 10, paddingBottom: 5 }}>
        <Typography variant="regularwords" component={"h2"}>
          /Sobre mim
        </Typography>
      </Container>
      <Grid
        container
        spacing={4}
        direction={"row"}
        sx={{ alignItems: "center", textAlign: "center" }}
      >
        <Grid item md={5}>
          <Typography
            paragraph
            variant="regularwords"
            sx={{
              fontSize: {
                xxs: "0.8rem",
                xs: "0.9rem",
                sm: "1rem",
                md: "1rem",
                xl: "3.5rem",
              },
            }}
          >
            Com 21 anos, Meu domínio se estende por diversas linguagens,
            incluindo HTML, CSS, JavaScript, TypeScript, React, Java e SQL.
            Atualmente em busca de uma oportunidade que me permita expandir e
            consolidar meus conhecimentos, trago também a certificação de
            fluência em inglês, reforçando minha capacidade de comunicação em
            ambientes profissionais diversificados.
          </Typography>
        </Grid>
        <Grid item md={7}>
          <Avatar
            src={Myimage}
            alt="my image"
            sx={{
              width: {
                xxs: "15rem",
                xs: "17rem",
                sm: "20rem",
                md: "20rem",
                xl: "40rem",
              },
              height: {
                xxs: "15rem",
                xs: "17rem",
                sm: "20rem",
                md: "20rem",
                xl: "40rem",
              },
            }}
          ></Avatar>
        </Grid>
      </Grid>
    </Box>
  );
}
