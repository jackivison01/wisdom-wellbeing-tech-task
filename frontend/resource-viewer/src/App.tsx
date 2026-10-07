import { Button, Container, Typography } from '@mui/material';

export default function App() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hello MUI
      </Typography>
      <Button variant="contained">Get started</Button>
    </Container>
  );
}