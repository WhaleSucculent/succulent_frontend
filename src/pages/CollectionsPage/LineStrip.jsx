import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import useStyles from "./LineStripStyle";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { IconButton } from "@mui/material";

function LineStrip() {
  const itemData = 
    {
      img: "https://images.unsplash.com/photo-1518510856312-e6e95b9fe973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Explore the world of succulents with a wide variety of plants and up your home decoration.",
      author: "swabdesign",
    };

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    };
  }

  const classes = useStyles();
  return (
    <div>
      <div className="container">
        <Stack
          direction="row"
          alignItem="center"
          justifyContent="center"
        >
          <ImageList
            sx={{ width: "100%", height: "90%" }}
            variant="quilted"
            cols={1}
            rowHeight={480}
          >
            <ImageListItem
              key={itemData.img}
              cols={itemData.cols || 1}
              rows={itemData.rows || 1}
            >
              <img
                {...srcset(itemData.img, 450, itemData.rows, itemData.cols)}
                alt={itemData.title}
                loading="lazy"
                
              />
              <ImageListItemBar
                sx={{
                  backgroundColor: "rgba(0,0,0, 0.65)",
                  height:'100%',
                  fontSize:'3em',
                  fontWeight:'bolder',
                  backdropFilter: "blur(2.5px)"
                }}
                title={itemData.title}
                position="bottom"
                actionPosition="bottom"
              />
            </ImageListItem>
          </ImageList>
        </Stack>
      </div>
    </div>
  );
}

export default LineStrip;
