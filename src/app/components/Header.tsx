import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              fontWeight: 700,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Yamila&apos;s Way
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} href="/" color="inherit">
              Inicio
            </Button>
            <Button component={Link} href="/about" color="inherit">
              Sobre Mí
            </Button>
            <Button component={Link} href="/podcasts" color="inherit">
              Podcasts
            </Button>
            <Button component={Link} href="/blog" color="inherit">
              Reflexiones
            </Button>
            <Button component={Link} href="/contact" color="inherit">
              Contacto
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
