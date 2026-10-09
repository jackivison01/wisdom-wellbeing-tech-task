import { useMemo, useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import rawResources from "../../../mock_data.json";
import { ResourceCard } from "./components/ResourceCard";
import { ResourceDetails } from "./components/ResourceDetails";
import type { Resource } from "./models/resource";
import { groupByCategory, sortResourcesByDate } from "./utils/resourceUtils";

const resources = rawResources as Resource[];
type SortMode = "category" | "date";

export default function App() {
  const [sortMode, setSortMode] = useState<SortMode>("category");
  const [selectedResource, setSelectedResource] =
    useState<Resource | null>(null);
  const resourcesByCategory = useMemo(
    () =>
      Object.entries(groupByCategory(resources)).sort(([first], [second]) =>
        first.localeCompare(second),
      ),
    [],
  );
  const resourcesByDate = useMemo(() => sortResourcesByDate(resources), []);

  return (
    <Container component="main" maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Resource Centre
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 4, alignItems: "center" }}>
        <Typography component="span" id="sort-label">
          Sort by
        </Typography>
        <Button
          aria-pressed={sortMode === "category"}
          onClick={() => setSortMode("category")}
          variant={sortMode === "category" ? "contained" : "outlined"}
        >
          Category
        </Button>
        <Button
          aria-pressed={sortMode === "date"}
          onClick={() => setSortMode("date")}
          variant={sortMode === "date" ? "contained" : "outlined"}
        >
          Date
        </Button>
      </Stack>

      {sortMode === "category" ? (
        <Grid container spacing={3}>
          {resourcesByCategory.map(([category, categoryResources]) => (
            <Grid key={category} size={{ xs: 12, sm: 4 }}>
              <Box component="section" aria-label={category}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {category}
                </Typography>
                <Stack spacing={2}>
                  {categoryResources.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      onSelect={setSelectedResource}
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {resourcesByDate.map((resource) => (
            <Grid key={resource.id} size={{ xs: 12, sm: 4 }}>
              <ResourceCard resource={resource} onSelect={setSelectedResource} />
            </Grid>
          ))}
        </Grid>
      )}

      <ResourceDetails
        open={Boolean(selectedResource)}
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </Container>
  );
}
