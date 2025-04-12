import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";
import PodcastCard from "../components/PodcastCard";

// Datos ficticios para los podcasts
const PODCASTS = [
  {
    id: "1",
    title: "Navegando entre culturas: identidad y pertenencia",
    description:
      "En este episodio, exploro los desafíos y riquezas de crecer entre varias culturas. ¿Cómo construir tu identidad cuando perteneces a varios mundos? ¿Cuáles son los retos y las fortalezas que esto aporta?",
    imageUrl: "/placeholder-podcast.jpg",
    date: "15 octubre 2023",
    duration: "45 min",
    episodeUrl: "#",
  },
  {
    id: "2",
    title: "La influencia familiar y el camino hacia la libertad",
    description:
      "Una profunda conversación sobre las dinámicas familiares complejas y cómo aprendí a trazar mis propios límites mientras honraba mis raíces y mi familia. Comparto estrategias para desarrollar una relación sana con tu familia.",
    imageUrl: "/placeholder-podcast.jpg",
    date: "1 septiembre 2023",
    duration: "52 min",
    episodeUrl: "#",
  },
  {
    id: "3",
    title: "El deporte como herramienta de transformación personal",
    description:
      "Cómo mi carrera como futbolista profesional me formó mucho más allá del campo. Hablo de las lecciones que el deporte de alto nivel me enseñó y cómo se aplican a todos los aspectos de la vida.",
    imageUrl: "/placeholder-podcast.jpg",
    date: "15 agosto 2023",
    duration: "38 min",
    episodeUrl: "#",
  },
  {
    id: "4",
    title: "Salud mental y autoconocimiento: mi camino personal",
    description:
      "Un episodio íntimo donde comparto mi propio viaje hacia una mejor salud mental y cómo la atención plena y el autoconocimiento han sido herramientas esenciales en este recorrido.",
    imageUrl: "/placeholder-podcast.jpg",
    date: "1 julio 2023",
    duration: "49 min",
    episodeUrl: "#",
  },
  {
    id: "5",
    title: "Comunicar a través de las diferencias culturales",
    description:
      "Habiendo vivido en diferentes países y navegado entre diversas culturas, comparto mis observaciones y consejos para una comunicación intercultural eficaz y respetuosa.",
    imageUrl: "/placeholder-podcast.jpg",
    date: "15 junio 2023",
    duration: "41 min",
    episodeUrl: "#",
  },
];

export default function PodcastsPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Podcasts
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: "800px", mx: "auto" }}
        >
          Exploraciones personales y conversaciones sobre cultura, identidad y
          desarrollo personal
        </Typography>

        {/* Zona de búsqueda */}
        <Box sx={{ maxWidth: "600px", mx: "auto", my: 6 }}>
          <TextField
            fullWidth
            placeholder="Buscar un episodio..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">🔍</InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* Lista de podcasts */}
      <Box>
        {PODCASTS.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            title={podcast.title}
            description={podcast.description}
            imageUrl={podcast.imageUrl}
            date={podcast.date}
            duration={podcast.duration}
            episodeUrl={podcast.episodeUrl}
          />
        ))}
      </Box>

      {/* Sección suscripción */}
      <Box
        sx={{
          my: 8,
          p: 4,
          bgcolor: "action.hover",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Suscríbete al podcast
        </Typography>
        <Typography variant="body1" paragraph>
          Disponible en todas las principales plataformas
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
            mt: 4,
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "40px",
              bgcolor: "background.paper",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <Typography variant="body2">Spotify</Typography>
          </Box>
          <Box
            sx={{
              width: "120px",
              height: "40px",
              bgcolor: "background.paper",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <Typography variant="body2">Apple Podcasts</Typography>
          </Box>
          <Box
            sx={{
              width: "120px",
              height: "40px",
              bgcolor: "background.paper",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <Typography variant="body2">Google Podcasts</Typography>
          </Box>
          <Box
            sx={{
              width: "120px",
              height: "40px",
              bgcolor: "background.paper",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <Typography variant="body2">YouTube</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
