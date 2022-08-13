import Stack from "@mui/material/Stack";
import useStyles from "./LineStripStyle";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box } from "@mui/material";
import { useState } from "react";
import Loading from "components/Loading";

function LineStrip({ category }) {
  const [videoLoaded, setVideoLoaded] = useState(0);
  const itemData = [
    {
      id: "collection_succulent",
      img: "https://images.unsplash.com/photo-1518510856312-e6e95b9fe973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Explore the world of succulents with a wide variety of plants and up your home decoration.",
      video: "https://player.vimeo.com/video/108595012"
    },
    {
      id: "collection_light",
      img: "https://images.unsplash.com/photo-1586278072754-28ba0dadbbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Use the grow lights to help your succulent grow better",
      video: "https://player.vimeo.com/video/739190856"
    },
    {
      id: "collection_soil",
      img: "https://images.unsplash.com/photo-1589135716303-d04b9f3ab4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Get the best soils for growing succulents",
      video: "https://player.vimeo.com/video/739189881"
    },
    {
      id: "collection_pots",
      img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80",
      title: "Pots for all your pothead needs",
      video: "https://player.vimeo.com/video/739191276"
    },

  ];
  function getIndex() {
    if (category === "Succulent") {
      return 0;
    }
    else if (category === "Grow Light") {
      return 1;
    }
    else if (category === "Soil") {
      return 2;
    }
    else if (category === "Pots") {
      return 3;
    }
  }



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
            // variant="quilted"
            cols={1}
            rowHeight={480}
          >
            <ImageListItem
              key={itemData[getIndex()].img}
              cols={itemData[getIndex()].cols || 1}
              rows={itemData[getIndex()].rows || 1}
              sx={{ overflow: "hidden" }}
            >
              <Box sx={{
                width: "100%",
                height: "100%",
                zIndex: "-1",
                pointerEvents: "none",
                overflow: "hidden",
                filter: "opacity(80%)"
              }}>
                <iframe title="vimeo" id="vimeoplayer1" src={`${itemData[getIndex()].video}?api=1&background=1&autoplay=1&loop=1&autopause=0&muted=1`} className="background-video ready" allow="autoplay"
                  style={{
                    width: "100vw",
                    height: "56.25vw", /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
                    minHeight: "100vh",
                    minWidth: "177.77vh", /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                  }} />
              </Box>
              <ImageListItemBar
                sx={{
                  height: '100%',
                  fontWeight: 'bolder',
                  background: 'rgba(0, 0, 0, 0.05)',
                  ".MuiImageListItemBar-title": {

                  }
                }}
                title={itemData[getIndex()].title}
                position="bottom"
              />
            </ImageListItem>
          </ImageList>
        </Stack>
      </div>
    </div>
  );
}

export default LineStrip;
