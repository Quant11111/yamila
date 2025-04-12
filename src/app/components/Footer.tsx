import Link from "next/link";
import { Box, Container, Stack, Typography, IconButton } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: "background.paper",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          <Box sx={{ maxWidth: { md: "33%" } }}>
            <Typography variant="h6" gutterBottom>
              Yamila&apos;s Way
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explorando mis orígenes multiculturales, podcasts, reflexiones
              sobre salud mental y mucho más.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: { md: "33%" } }}>
            <Typography variant="h6" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Stack spacing={1}>
              <Link
                href="/"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Inicio
              </Link>
              <Link
                href="/about"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Sobre Mí
              </Link>
              <Link
                href="/podcasts"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Podcasts
              </Link>
              <Link
                href="/blog"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Reflexiones
              </Link>
              <Link
                href="/contact"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Contacto
              </Link>
            </Stack>
          </Box>

          <Box sx={{ maxWidth: { md: "33%" } }}>
            <Typography variant="h6" gutterBottom>
              Sígueme
            </Typography>
            <Box>
              {/* Placeholder para iconos sociales */}
              <IconButton aria-label="instagram">
                <Box
                  component="span"
                  sx={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  IG
                </Box>
              </IconButton>
              <IconButton aria-label="twitter">
                <Box
                  component="span"
                  sx={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  TW
                </Box>
              </IconButton>
              <IconButton aria-label="youtube">
                <Box
                  component="span"
                  sx={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  YT
                </Box>
              </IconButton>
            </Box>
          </Box>
        </Stack>

        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Yamila&apos;s Way. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
