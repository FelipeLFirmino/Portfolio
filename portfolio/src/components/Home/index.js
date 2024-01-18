import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Container, Grid, Typography } from "@mui/material";
import Grow from "@mui/material/Grow";
import Myimage from "../../images/fotoavatar.jpg";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 5, bgcolor: "#0a192f" }}>
      <Grid
        container
        direction="column"
        spacing={5}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Grow in timeout={1000}>
            <Avatar
              src={Myimage}
              alt="my image"
              sx={{ width: 250, height: 250 }}
            ></Avatar>
          </Grow>
        </Grid>
        <Grid item>
          <Container maxWidth="sm">
            <Grow in timeout={2500}>
              <Typography
                variant="regularwords"
                component={"h2"}
                textAlign={"center"}
                margin={"6px"}
              >
                Olá, meu nome é
                <Typography variant={"highlighted"} component={"span"}>
                  {" "}
                  Felipe Firmino
                </Typography>
              </Typography>
            </Grow>

            <Grow in timeout={3500}>
              <Typography
                variant="regularwords"
                component={"h4"}
                paragraph
                textAlign={"center"}
              >
                Bem-vindo ao meu portfolio! Aqui, compartilho minha jornada e
                paixão por tecnologia. Estou animado para enfrentar novos
                desafios e contribuir para um mundo digital mais inovador. Vamos
                juntos explorar as possibilidades!
              </Typography>
            </Grow>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
