import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";

export default function ContactPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contacto
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: "700px", mx: "auto" }}
        >
          ¿Quieres contactarme para colaboraciones, preguntas o simplemente para
          conversar? ¡No dudes en escribirme!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          mb: 8,
        }}
      >
        {/* Formulario de contacto */}
        <Box sx={{ flex: { xs: "1", md: "7" } }}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Envíame un mensaje
            </Typography>
            <Box component="form" sx={{ mt: 4 }}>
              <Stack spacing={3}>
                <TextField
                  label="Nombre completo"
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField label="Asunto" fullWidth variant="outlined" />
                <TextField
                  label="Mensaje"
                  multiline
                  rows={6}
                  fullWidth
                  required
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{ mt: 2, py: 1.5 }}
                >
                  Enviar mensaje
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Box>

        {/* Información de contacto */}
        <Box sx={{ flex: { xs: "1", md: "5" } }}>
          <Box sx={{ height: "100%" }}>
            <Paper
              elevation={0}
              sx={{ p: 4, mb: 4, borderRadius: 2, bgcolor: "action.hover" }}
            >
              <Typography variant="h5" gutterBottom>
                Sígueme
              </Typography>
              <Stack spacing={2} sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: "background.paper",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2">IG</Typography>
                  </Box>
                  <Typography variant="body1">@yamilasway</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: "background.paper",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2">YT</Typography>
                  </Box>
                  <Typography variant="body1">Yamila&apos;s Way</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: "background.paper",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2">TW</Typography>
                  </Box>
                  <Typography variant="body1">@yamilasway_</Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper
              elevation={0}
              sx={{ p: 4, borderRadius: 2, bgcolor: "action.hover" }}
            >
              <Typography variant="h5" gutterBottom>
                Colaboraciones profesionales
              </Typography>
              <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                Para solicitudes profesionales, asociaciones u oportunidades de
                coaching, por favor envíame un email a la siguiente dirección:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                contact@yamilasway.com
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* Preguntas frecuentes */}
      <Box sx={{ my: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ mb: 6 }}
        >
          Preguntas frecuentes
        </Typography>

        <Stack spacing={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              ¿Ofreces sesiones de coaching individual?
            </Typography>
            <Typography variant="body1">
              Sí, ofrezco sesiones de coaching personalizadas, centradas en el
              desarrollo personal, la gestión de relaciones familiares complejas
              y la navegación entre culturas. Contáctame para más información.
            </Typography>
          </Paper>

          <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              ¿Dónde puedo escuchar tus podcasts?
            </Typography>
            <Typography variant="body1">
              Mis podcasts están disponibles en todas las principales
              plataformas: Spotify, Apple Podcasts, Google Podcasts y YouTube.
              También puedes escucharlos directamente en este sitio en la
              sección Podcasts.
            </Typography>
          </Paper>

          <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              ¿Aceptas invitaciones para conferencias o eventos?
            </Typography>
            <Typography variant="body1">
              ¡Absolutamente! Participo regularmente en conferencias y eventos
              sobre temas relacionados con la identidad multicultural, el
              deporte femenino y el desarrollo personal. Envíame los detalles de
              tu evento a través del formulario de contacto.
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
}
