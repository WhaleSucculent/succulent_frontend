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

function LineStrip({category}) {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1518510856312-e6e95b9fe973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Explore the world of succulents with a wide variety of plants and up your home decoration.",
      author: "swabdesign",
    },
    {
      img: "https://images.unsplash.com/photo-1586278072754-28ba0dadbbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Use the grow lights to help your succulent grow better",
      author: "swabdesign",
    }, 
    {
      img: "https://images.unsplash.com/photo-1589135716303-d04b9f3ab4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Get the best soils for growing succulents",
      author: "swabdesign",
    }, 
    {
      img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80",
      title: "Pots for all your pothead needs",
      author: "swabdesign",
    }, 

  ];
  function getIndex(){
    if (category === "Succulent"){
      return 0;
    }
    else if(category === "Grow Light"){
      return 1;
    }
    else if(category === "Soil"){
      return 2;
    }
    else if(category === "Pots"){
      return 3;
    }
  }
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
              key={itemData[getIndex()].img}
              cols={itemData[getIndex()].cols || 1}
              rows={itemData[getIndex()].rows || 1}
            >
              <img
                {...srcset(itemData[getIndex()].img, 450, itemData[getIndex()].rows, itemData[getIndex()].cols)}
                alt={itemData[getIndex()].title}
                loading="lazy"
                
              />
              <ImageListItemBar
                sx={{
                  backgroundColor: "rgba(0,0,0, 0.65)",
                  height:'100%',
                  fontSize:'3em',
                  fontWeight:'bolder',
                  backdropFilter: "blur(2.5px)",
                  ".MuiImageListItemBar-title":{
                   fontSize:'0.45em',
                   wordWwrap: 'break-word',
                   height:'100%',
                  }
                }}
                title ={itemData[getIndex()].title}
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
