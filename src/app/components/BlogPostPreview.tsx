import Link from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type BlogPostPreviewProps = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
};

export default function BlogPostPreview({
  id,
  title,
  excerpt,
  imageUrl,
  date,
  category,
}: BlogPostPreviewProps) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea component={Link} href={`/blog/${id}`}>
        <CardMedia component="img" height="200" image={imageUrl} alt={title} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="overline" color="primary" gutterBottom>
              {category}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              component="div"
            >
              {date}
            </Typography>
          </Box>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
