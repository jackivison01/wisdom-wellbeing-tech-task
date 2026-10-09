import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import type { Resource } from "../models/resource";

interface ResourceDetailsProps {
  resource: Resource | null;
  open: boolean;
  onClose: () => void;
}

export function ResourceDetails({
  resource,
  open,
  onClose,
}: ResourceDetailsProps) {
  if (!resource) {
    return null;
  }

  const uploadedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
  }).format(new Date(`${resource.date_uploaded}T00:00:00`));

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{resource.title}</DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          <img
            src={resource.thumbnail}
            alt={resource.title}
            style={{ width: "100%", borderRadius: 8 }}
          />

          <Typography variant="body2" color="text.secondary">
            {resource.category} · {resource.duration} minutes
          </Typography>

          <Typography>{resource.description}</Typography>

          <Typography variant="body2">Uploaded: {uploadedDate}</Typography>

          <Typography variant="body2">
            Tags: {resource.tags.join(", ")}
          </Typography>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
