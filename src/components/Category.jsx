import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { IconButton } from '@mui/material';
import { Opacity } from '@mui/icons-material';

function Category() {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1518510856312-e6e95b9fe973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
          title: 'Rare Cucculent',
          author: 'swabdesign',
        },
        {
          img: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80',
          title: 'Plant Pot',
          author: 'Pavel Nekoranec',
        },
        {
          img: 'https://images.unsplash.com/photo-1594336874658-6110582818bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          title: 'Soil',
          author: 'Charles Deluvio',
        },
        {
          img: 'https://images.unsplash.com/photo-1559657153-fdea6cd5ddf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
          title: 'Grow Lights',
          author: 'Christian Mackie',
        }, {
            img: 'https://images.unsplash.com/photo-1559881231-05b582002145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            title: 'Rocks',
            author: 'Douglas Sheppard',
          
      
          }]

          function srcset(image, size, rows = 1, cols =1) {
            return {
              src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
              srcSet: `${image}?w=${size * cols}&h=${
                size * rows
              }&fit=crop&auto=format`,
            };
          }
  return (
    <div>
        <ImageList
    sx={{ width: '100%', height: '90%' }}
    variant="quilted"
    cols={5}
    rowHeight={480}
  >
    {itemData.map((item) => (
      <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
        <img
          {...srcset(item.img, 450, item.rows, item.cols)}
          alt={item.title}
          loading="lazy"
        />
          {/* <ImageListItemBar position="below" title={item.title}  /> */}
          <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, #00000032 0%, ' +
                  '#00000028 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="bottom"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                
                >
                </IconButton>
              }
              actionPosition="bottom"
            />
          </ImageListItem>
  
    ))}
  </ImageList>
    </div>
  )
}

export default Category