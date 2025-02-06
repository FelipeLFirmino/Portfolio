import * as React from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import Myimage from "../../images/fotoavatar.jpg";
import Grow from "@mui/material/Grow";

export default function About() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 10, bgcolor: "#0a192f" }}>
      <Grid
        container
        spacing={4}
        direction={"row"}
        justifyContent="center"
        alignItems="center"
      >
       
        <Grid item>
          <Grow in timeout={2500}>
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
            </Grow>
                    </Grid>
                    <Grid item container md={6} justifyContent={"center"}>
          <Grow  in timeout={2500} >
            <Typography
              paragraph
              variant="regularwords"
              textAlign={"center"}
              sx={{
                fontSize: {
                  xxs: "0.8rem",
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1rem",
                  xl: "2.2rem",
                },
              }}
            >
              Com 21 anos, Meu domínio se estende por diversas linguagens,
              incluindo <Typography variant="highlighted">HTML, CSS, JavaScript, TypeScript, React, Angular, Golang e SQL. </Typography>
              Atualmente em busca de uma oportunidade que me permita expandir e
              consolidar meus conhecimentos, trago também a certificação de 
              <Typography variant="highlighted"> fluência em inglês avançada, Nivel C1</Typography>, reforçando minha capacidade de comunicação em
              ambientes profissionais diversificados.
            </Typography>
          </Grow>
        </Grid>
          
      </Grid>
    </Box>
  );
}
