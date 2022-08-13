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
import OnScrollAnimationBox from "./OnScrollAnimationBox";
import { useState, useEffect } from "react";

// const shadow = "0 8px 8px -4px lightblue"
const shadow2 = "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)"
const shadow3 = "0px 41px 0px rgba(0, 0, 0, 1)"

function ProductCard({ product }) {
  const [rating, setRating] = useState(0)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerAddToCart = (product) => {
    dispatch(addToMyCart(product));
    //  navigate("/cart")
  };
  
  useEffect(() => {
      if (!product.review) {
        setRating(0)
      } else {
        const sum = product.review.reduce((acc, curr) => acc + curr.rating, 0)
        setRating(sum / product.review.length)
      }

  }, [product.review])
  
  const getImage = () => {
    return product.image.length > 0 ? product.image[0].imageLink : "no image found";
  }


  return (
    <Container sx={{ my: 2}}>

      <Grid component={motion.div} whileHover={{ y: '-15px' }} container spacing={{ xs: 0, md: 1 }} direction="row">
        <Grid item>
          <Card sx={{ maxWidth: 345}}>
            <Link to={`/products/${product.id}`} underline="none">
              <CardMedia
                component="img"
                alt="Succulent Image"
                height="300"
                width="300"
                src={getImage()}
              />
              <CardContent mt={2}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: "1.2rem" } }}>
                  {product.name}
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary" sx={{ px: 1, fontSize: { xs: "1rem" } }} >
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
                        value={rating ?? ""}
                        defaultValue={0}
                        precision={0.5}
                        readOnly
                        sx={{ padding: 0 }}
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
