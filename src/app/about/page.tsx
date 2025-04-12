import { Box, Container, Typography, Paper, Stack } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Mi Trayectoria
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
        >
          De las Islas Canarias a los campos marroquíes, pasando por el Sur de
          Francia
        </Typography>
      </Box>

      {/* Sección Orígenes */}
      <Paper
        elevation={0}
        sx={{ p: 4, mb: 6, borderRadius: 2, bgcolor: "background.paper" }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Mis Orígenes
        </Typography>
        <Typography variant="body1" paragraph>
          Nacida y criada en las Islas Canarias, mi identidad se ha forjado a
          través de un rico patrimonio multicultural, entre raíces saharauis y
          españolas. Esta dualidad cultural me ha ofrecido una perspectiva única
          del mundo, enseñándome el valor de la diversidad y la importancia de
          mantenerme conectada a mis raíces.
        </Typography>
        <Typography variant="body1" paragraph>
          Mi juventud bajo el sol canario estuvo marcada por una mezcla de
          fuertes tradiciones familiares e influencias occidentales modernas,
          creando una tensión creativa que sigue dando forma a mi visión del
          mundo hoy.
        </Typography>

        {/* Placeholder para foto */}
        <Box
          sx={{
            width: "100%",
            height: "300px",
            bgcolor: "action.hover",
            my: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <Typography>Foto de las Islas Canarias</Typography>
        </Box>
      </Paper>

      {/* Sección Fútbol */}
      <Paper
        elevation={0}
        sx={{ p: 4, mb: 6, borderRadius: 2, bgcolor: "background.paper" }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Mi Carrera en el Fútbol
        </Typography>
        <Typography variant="body1" paragraph>
          Mi pasión por el fútbol me llevó hasta la selección nacional de
          Marruecos, una experiencia que transformó mi vida. Convertirme en
          futbolista profesional en un entorno donde las mujeres están poco
          representadas en este deporte fue un desafío constante, pero también
          una inmensa fuente de orgullo.
        </Typography>
        <Typography variant="body1" paragraph>
          En el campo, aprendí disciplina, perseverancia y espíritu de equipo.
          Estos valores han trascendido el ámbito deportivo para convertirse en
          pilares de mi filosofía personal y profesional.
        </Typography>

        {/* Placeholder para foto */}
        <Box
          sx={{
            width: "100%",
            height: "300px",
            bgcolor: "action.hover",
            my: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <Typography>Foto con la selección nacional de Marruecos</Typography>
        </Box>
      </Paper>

      {/* Sección Presente */}
      <Paper
        elevation={0}
        sx={{ p: 4, mb: 6, borderRadius: 2, bgcolor: "background.paper" }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Mi Vida Hoy
        </Typography>
        <Typography variant="body1" paragraph>
          Establecida en el Sur de Francia, hoy sigo mi pasión por la educación
          y el desarrollo personal. Como educadora y coach, me esfuerzo por
          transmitir los valores que el deporte y mis diversas experiencias
          culturales me han enseñado.
        </Typography>
        <Typography variant="body1" paragraph>
          Mi trayectoria única me ha sensibilizado hacia los desafíos de la
          influencia familiar y la salud mental, temas que abordo regularmente
          en mis podcasts y escritos. Creo firmemente que compartir nuestras
          historias personales puede ser fuente de inspiración y emancipación
          para otros.
        </Typography>

        {/* Placeholder para foto */}
        <Box
          sx={{
            width: "100%",
            height: "300px",
            bgcolor: "action.hover",
            my: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <Typography>Foto en el Sur de Francia</Typography>
        </Box>
      </Paper>

      {/* Sección Pasiones */}
      <Paper
        elevation={0}
        sx={{ p: 4, borderRadius: 2, bgcolor: "background.paper" }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Mis Pasiones
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mb: 4 }}
        >
          <Box sx={{ flex: 1, textAlign: "center", p: 2 }}>
            <Box sx={{ fontSize: "3rem", mb: 2 }}>💬</Box>
            <Typography variant="h6" gutterBottom>
              Comunicación
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Compartir ideas y crear conexiones auténticas a través de
              diferentes culturas e idiomas.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center", p: 2 }}>
            <Box sx={{ fontSize: "3rem", mb: 2 }}>👗</Box>
            <Typography variant="h6" gutterBottom>
              Moda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explorar la expresión personal a través del estilo, mezclando
              influencias tradicionales y contemporáneas.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center", p: 2 }}>
            <Box sx={{ fontSize: "3rem", mb: 2 }}>✈️</Box>
            <Typography variant="h6" gutterBottom>
              Viajes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descubrir nuevas culturas y perspectivas que enriquecen mi visión
              del mundo.
            </Typography>
          </Box>
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Box sx={{ flex: 1, textAlign: "center", p: 2 }}>
            <Box sx={{ fontSize: "3rem", mb: 2 }}>⚽</Box>
            <Typography variant="h6" gutterBottom>
              Deporte
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mantenerme activa y cultivar los valores de disciplina y
              perseverancia que el deporte me ha enseñado.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center", p: 2 }}>
            <Box sx={{ fontSize: "3rem", mb: 2 }}>🧠</Box>
            <Typography variant="h6" gutterBottom>
              Autoconocimiento
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Practicar la atención plena y profundizar en el conocimiento de mí
              misma y mis emociones.
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
