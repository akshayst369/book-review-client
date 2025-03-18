import React from "react";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import { motion } from "framer-motion";

const BookCard = ({ book, onClick }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <CardActionArea onClick={onClick}>
        <Card sx={{ height: 350, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CardMedia
            component="img"
            image={book.cover}
            alt={book.title}
            sx={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
              padding: 1,
            }}
          />
        </Card>
      </CardActionArea>
    </motion.div>
  );
};

export default BookCard;
