import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addToMyCart } from "pages/CheckoutPage/features/cartSlice";
import { Container, Grid, CardActionArea } from "@mui/material";
import Link from "../../components/Link";

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handlerAddToCart = (product) => {
      dispatch(addToMyCart(product));
      //  navigate("/cart")
    };
    const getReview = () => {
      console.log(product.productStatus);
      if (product.review.length == 0) {
        return 0;
      }
  
      return product.review[0].stars;
    };
  
    const getImage =() =>{
        return product.image.length > 0? product.image[0].imageLink : "no image found";
    }
    return (
      <Container>
      <Card sx={{ maxWidth: 345 }}>
      <Link to={`products/${product.id}`} underline="none">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="80%"
          src={getImage()}
          alt="succulent"
          sx={{width:'50%', margin:'0 auto'}}
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div">
                    {product.name}
        </Typography>
          <Typography noWrap variant="body2" color="text.secondary" width="80%" margin="0 auto">
          {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
      </Container>
    );
  }
//   function Item(props) {
//     const { sx, ...other } = props;
//     return (
//       <Box
//         sx={{
//           p: 1,
//           m: 1,
//           borderRadius: 2,
//           fontSize: "0.1rem",
//           fontWeight: "700",
//           ...sx,
//         }}
//         {...other}
//       />
//     );
//   }
  
  export default ProductCard;
  