import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* Section Hero */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          mb: 8,
          mt: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            Yamila&apos;s Way
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Explorando mis orígenes multiculturales, mis reflexiones y mi
            trayectoria entre las Islas Canarias, Marruecos y Francia.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/about"
            >
              Mi historia
            </Button>
            <Button variant="outlined" component={Link} href="/podcasts">
              Mis podcasts
            </Button>
          </Stack>
        </Box>
        <Box sx={{ flex: 1, order: { xs: 1, md: 2 }, textAlign: "center" }}>
          {/* Placeholder para la imagen de Yamila */}
          <Box
            sx={{
              width: { xs: "100%", md: "400px" },
              height: { xs: "300px", md: "400px" },
              bgcolor: "action.hover",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
            }}
          >
            <Typography variant="body1">Foto de Yamila</Typography>
          </Box>
        </Box>
      </Box>

      {/* Sección Orígenes */}
      <Box sx={{ my: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ mb: 4, textAlign: "center" }}
        >
          Mis Orígenes
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box sx={{ textAlign: "center", p: 2 }}>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  bgcolor: "action.hover",
                  borderRadius: "50%",
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>Canarias</Typography>
              </Box>
              <Typography variant="h6" gutterBottom>
                Islas Canarias
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mis raíces y mi cultura de origen, bañadas de sol e influencias
                españolas.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ textAlign: "center", p: 2 }}>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  bgcolor: "action.hover",
                  borderRadius: "50%",
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>Marruecos</Typography>
              </Box>
              <Typography variant="h6" gutterBottom>
                Fútbol en Marruecos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mi trayectoria profesional en el fútbol y los desafíos superados
                como futbolista internacional.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ textAlign: "center", p: 2 }}>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  bgcolor: "action.hover",
                  borderRadius: "50%",
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>Francia</Typography>
              </Box>
              <Typography variant="h6" gutterBottom>
                Sur de Francia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mi vida actual en Francia, entre coaching, educación y
                desarrollo personal.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Sección Podcasts */}
      <Box
        sx={{ my: 8, bgcolor: "action.hover", py: 6, px: 4, borderRadius: 2 }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Podcasts Recientes
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ textAlign: "center", mb: 4 }}
        >
          Descubre mis conversaciones sobre salud mental, desafíos culturales y
          desarrollo personal.
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" component={Link} href="/podcasts">
            Explorar podcasts
          </Button>
        </Box>
      </Box>

      {/* Sección Blog/Reflexiones */}
      <Box sx={{ my: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Últimas Reflexiones
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {[1, 2, 3].map((item) => (
            <Box key={item} sx={{ flex: 1 }}>
              <Box
                sx={{
                  height: "200px",
                  bgcolor: "action.hover",
                  mb: 2,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>Imagen artículo {item}</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                {item === 1
                  ? "La influencia familiar y la liberación"
                  : item === 2
                  ? "Navegando entre culturas"
                  : "El deporte como terapia"}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue.
              </Typography>
              <Link
                href="/blog"
                style={{ color: "primary.main", textDecoration: "none" }}
              >
                Leer más →
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
