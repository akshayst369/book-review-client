import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Grid, Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import BookCard from "./components/BookCard";

// 🔥 Dark Theme Setup - Enhanced
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00bcd4" }, // Cyan
    secondary: { main: "#ff4081" }, // Pink Accent
    background: { default: "#0f0f0f", paper: "#1a1a1a" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
  },
});

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleBookClick = (bookId) => {
    axios.get(`http://localhost:5000/books/${bookId}`)
      .then(res => setSelectedBook(res.data))
      .catch(err => console.error(err));
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ paddingY: 4 }}>
        <Typography variant="h3" align="center" color="primary" gutterBottom>
          Book Review Platform
        </Typography>
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book._id}>
              <BookCard book={book} onClick={() => handleBookClick(book._id)} />
            </Grid>
          ))}
        </Grid>

        {/* Review Modal */}
        <Dialog open={!!selectedBook} onClose={() => setSelectedBook(null)} maxWidth="sm" fullWidth>
          {selectedBook && (
            <>
              <DialogTitle>{selectedBook.title}</DialogTitle>
              <DialogContent dividers>
                {selectedBook.reviews.map((review, index) => (
                  <Typography key={index} sx={{ marginBottom: 1 }}>
                    {review}
                  </Typography>
                ))}
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}

export default App;
