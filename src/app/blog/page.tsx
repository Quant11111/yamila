import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  InputBase,
  Paper,
} from "@mui/material";
import BlogPostPreview from "../components/BlogPostPreview";

// Datos ficticios para los artículos del blog
const BLOG_POSTS = [
  {
    id: "emprise-familiale",
    title: "Liberarse de la influencia familiar: un viaje personal",
    excerpt:
      "Cómo aprendí a establecer límites saludables con mi familia mientras honraba mis raíces y tradiciones culturales.",
    imageUrl: "/placeholder-blog.jpg",
    date: "10 octubre 2023",
    category: "Desarrollo Personal",
  },
  {
    id: "entre-deux-cultures",
    title: "Vivir entre dos culturas: riqueza y desafíos",
    excerpt:
      "Reflexiones sobre mi experiencia navegando entre mis raíces canarias/saharauis y mi vida en Francia.",
    imageUrl: "/placeholder-blog.jpg",
    date: "25 septiembre 2023",
    category: "Cultura",
  },
  {
    id: "sport-femme-maroc",
    title: "Ser futbolista profesional en Marruecos",
    excerpt:
      "Los desafíos y victorias de mi carrera deportiva en un entorno donde las mujeres están a menudo subrepresentadas en el deporte.",
    imageUrl: "/placeholder-blog.jpg",
    date: "15 septiembre 2023",
    category: "Deporte",
  },
  {
    id: "meditation-quotidienne",
    title: "Cómo la meditación transformó mi relación conmigo misma",
    excerpt:
      "Mi camino de descubrimiento de la atención plena y el impacto profundo que esta práctica ha tenido en mi salud mental y bienestar general.",
    imageUrl: "/placeholder-blog.jpg",
    date: "5 septiembre 2023",
    category: "Salud Mental",
  },
  {
    id: "voyages-transformateurs",
    title: "Los viajes que han moldeado mi visión del mundo",
    excerpt:
      "Cómo mis experiencias de viaje entre Europa y África han ampliado mi perspectiva y profundizado mi comprensión de diferentes culturas.",
    imageUrl: "/placeholder-blog.jpg",
    date: "20 agosto 2023",
    category: "Viajes",
  },
  {
    id: "communication-authentique",
    title: "El arte de la comunicación auténtica",
    excerpt:
      "Reflexiones sobre la importancia de encontrar tu voz auténtica y comunicar con intención, ya sea en persona o en redes sociales.",
    imageUrl: "/placeholder-blog.jpg",
    date: "10 agosto 2023",
    category: "Comunicación",
  },
];

export default function BlogPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Reflexiones
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
          align="center"
        >
          Mis pensamientos y experiencias sobre cultura, identidad, salud mental
          y desarrollo personal
        </Typography>

        {/* Zona de búsqueda */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 6,
            display: "flex",
            alignItems: "center",
            maxWidth: "700px",
            mx: "auto",
            bgcolor: "action.hover",
          }}
        >
          <Box component="span" sx={{ mr: 1 }}>
            🔍
          </Box>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar un tema..."
            inputProps={{ "aria-label": "buscar un artículo" }}
          />
        </Paper>

        {/* Filtros por categoría */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom align="center">
            Explorar por tema
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "center",
              "& > *": { margin: "4px !important" },
            }}
          >
            <Chip label="Todos" color="primary" variant="filled" />
            <Chip label="Desarrollo Personal" variant="outlined" />
            <Chip label="Cultura" variant="outlined" />
            <Chip label="Deporte" variant="outlined" />
            <Chip label="Salud Mental" variant="outlined" />
            <Chip label="Viajes" variant="outlined" />
            <Chip label="Comunicación" variant="outlined" />
          </Stack>
        </Box>
      </Box>

      {/* Lista de artículos */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          mb: 8,
        }}
      >
        {BLOG_POSTS.map((post) => (
          <Box
            key={post.id}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                md: "calc(33.33% - 16px)",
              },
            }}
          >
            <BlogPostPreview
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              date={post.date}
              category={post.category}
            />
          </Box>
        ))}
      </Box>

      {/* Sección newsletter */}
      <Box
        sx={{
          my: 8,
          p: 6,
          bgcolor: "action.hover",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Mantente informado/a
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: "600px", mx: "auto" }}
        >
          Suscríbete a mi newsletter para recibir mis últimas reflexiones
          directamente en tu bandeja de entrada.
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            maxWidth: 400,
            mx: "auto",
            bgcolor: "background.paper",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tu dirección de email"
            inputProps={{ "aria-label": "dirección de email para newsletter" }}
          />
          <Box
            component="button"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              border: "none",
              borderRadius: 1,
              p: "8px 16px",
              cursor: "pointer",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Suscribirse
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
