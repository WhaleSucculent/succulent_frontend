import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../assets/images/1.jpg";
import Rating from "@mui/material/Rating";
import Grid from '@mui/material/Grid';

function ProductCard({ product }) {
   var cardStyle={
      height:'20vw',
      padding:'2em 1em'
   }
   console.log(product.priceList[0].price)
  return (
         <Card style={cardStyle}>
            <CardMedia
            component="img"
            alt="succondese"
            height="140"
            image={img1} />
            <CardContent>
               <Typography align="left" gutterBottom variant="body1" component="div">
                  {product.name}
                  </Typography>
               <Typography align="left" variant="body2" gutterBottom color="text.secondary">
                  {product.description}
                  </Typography>
                  <Grid container spacing={3}>
                     <Grid item >
                        <Typography variant="h5" color="text.secondary">
                          ${product.priceList[0].price}
                           </Typography>
                        </Grid>
                     </Grid>
            </CardContent>
            <CardActions>
               <Button size="small">Buy</Button>
               <Button size="small">Add to Cart</Button>
            </CardActions>
         </Card>
  )
}

export default ProductCard