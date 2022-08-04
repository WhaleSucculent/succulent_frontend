import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../assets/images/1.jpg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addToMyCart } from "pages/CheckoutPage/features/cartSlice";
import { Container, Grid} from "@mui/material";
import Link from "./Link";

function ProductCard({ product }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerAddToCart = (product) => {
    dispatch(addToMyCart(product))
    //  navigate("/cart")
  };
  return (
    <Container>
    <Grid container spacing={{ xs: 2, md: 3 }} direction="row" >
      <Grid item xs={15} md={20}>
    <Card sx={{ maxWidth: 345}}>
      <Link to={`products/${product.id}`} underline="none" >
        <CardMedia component="img" alt="succondese" height="300" src={product.image[0].imageLink} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography noWrap variant="body2" color="text.secondary">
            {product.description}
          </Typography>

        </CardContent>
        <CardContent>
          {/* <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}> */}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
            <Item>
              <Typography variant="h6" color="text.secondary">
                ${product.priceList[0].price}
              </Typography>
            </Item>
            </Grid>
            <Grid item xs={3}>
            <Item>
              <Rating
                name="half-rating-read"
                defaultValue={product.review[0].stars}
                precision={0.5}
                readOnly
              />
            </Item>
            </Grid>
          </Grid>
        
        </CardContent>
      </Link>
        <CardActions>
          {/* <Button size="small">Buy</Button> */}
          {/* <Button size="small" onClick={() => handlerAddToCart(product)}>Add to Cart</Button> */} 

          <Button variant="contained" sx={ { borderRadius: 28, backgroundColor:'#ffb2cc', justifyContent:'center' } } onClick={() => handlerAddToCart(product)}>Add to Cart</Button>
          </CardActions>
    </Card>
    </Grid>
    </Grid>
    </Container>
  
  );
}
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.1rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default ProductCard