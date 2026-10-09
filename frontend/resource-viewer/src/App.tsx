import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import rawResources from "../../../mock_data.json";
import { ResourceCard } from "./components/ResourceCard";
import { ResourceDetails } from "./components/ResourceDetails";
import type { Resource } from "./models/resource";
import { groupByCategory } from "./utils/resourceUtils";

const resources = rawResources as Resource[];

export default function App() {
  const resourcesByCategory = groupByCategory(resources);
  const [selectedResource, setSelectedResource] =
    useState<Resource | null>(null);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Resource Centre
      </Typography>

      {Object.entries(resourcesByCategory).map(
        ([category, categoryResources]) => (
          <Box component="section" key={category} sx={{ mb: 5 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {category}
            </Typography>

            <Grid container spacing={3}>
              {categoryResources.map((resource) => (
                <Grid key={resource.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ResourceCard
                    resource={resource}
                    onSelect={setSelectedResource}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ),
      )}

      <ResourceDetails
        open={Boolean(selectedResource)}
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </Container>
  );
}