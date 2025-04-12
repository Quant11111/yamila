import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

type PodcastCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  duration: string;
  episodeUrl: string;
};

export default function PodcastCard({
  title,
  description,
  imageUrl,
  date,
  duration,
  episodeUrl,
}: PodcastCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        mb: 4,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: 200 },
          height: { xs: 200, md: "100%" },
          objectFit: "cover",
        }}
        image={imageUrl}
        alt={title}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h2" variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            {date} • {duration}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {description}
          </Typography>

          {/* Reproductor de audio simplificado */}
          <Box sx={{ mt: 2 }}>
            <audio controls style={{ width: "100%" }}>
              <source src={episodeUrl} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
