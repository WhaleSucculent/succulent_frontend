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
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { addToMyCart } from "pages/CheckoutPage/features/cartSlice";
import { Container, Grid } from "@mui/material";
import Link from "./Link";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerAddToCart = (product) => {
    dispatch(addToMyCart(product));
    //  navigate("/cart")
  };
  const getReview = () => {
    if (product.review.length == 0) {
      return 0;
    }

    return product.review[0].stars;
  };

  const getImage = () => {
    return product.image.length > 0 ? product.image[0].imageLink : "no image found";
  }
  return (
    <Container>
      {(
        <Grid component={motion.div} whileHover={{ y: '-15px' }} container spacing={{ xs: 0, md: 1 }} direction="row">
          <Grid item>
            <Card sx={{ maxWidth: 345 }}>
              <Link to={`products/${product.id}`} underline="none">
                <CardMedia
                  component="img"
                  alt="Succulent Image"
                  height="300"
                  src={getImage()}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: "1.2rem" }}}>
                    {product.name}
                  </Typography>
                  <Typography noWrap variant="body2" color="text.secondary" sx={{ px:1, fontSize: { xs: "1rem" } }} >
                    {product.description}
                  </Typography>
                </CardContent>
                <CardContent>
                  {/* <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}> */}
                  <Grid
                    container
                    columnSpacing={{ xs: 0, sm: 1, md: 2 }}
                  >
                  <Grid item xs={1.5}></Grid>
                    <Grid item xs={3}>
                      <Item>
                        <Typography variant="h6" color="text.secondary" sx={{ fontSize: { xs: "1.2rem" } }}>
                          ${product.priceList[0].price}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={3}>
                      <Item>
                        <Rating
                          name="half-rating-read"
                          defaultValue={getReview}
                          precision={0.5}
                          readOnly
                          sx={{padding:0}}
                        />
                      </Item>
                    </Grid>
                  </Grid>
                </CardContent>
              </Link>
              <CardActions>
                {/* <Button size={{xs: "small", lg: "large"}}>Buy</Button> */}
                {/* <Button size="small" onClick={() => handlerAddToCart(product)}>Add to Cart</Button> */}

                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 28,
                    backgroundColor: "#ffb2cc",
                    justifyContent: "center",
                    margin: "0 auto"
                  }}
                  onClick={() => handlerAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
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

export default ProductCard;
