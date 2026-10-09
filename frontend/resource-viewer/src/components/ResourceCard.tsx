import { Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import type { Resource } from "../models/resource";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image={resource.thumbnail}
        alt={resource.title}
      />

      <CardContent>
        <Typography component="h2" variant="h6" gutterBottom>
          {resource.title}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{ mb: 2 }}
        >
          {resource.tags.slice(0, 3).map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>

        <Typography color="text.secondary" variant="body2">
          {resource.duration} minutes
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ResourceCard;