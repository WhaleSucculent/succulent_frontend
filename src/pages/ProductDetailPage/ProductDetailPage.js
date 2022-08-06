import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import {
  Container,
  Box,
  Typography,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { Product, ProductImage } from "./Product";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT, GET_PRODUCTS } from "queries/productQueries";
import { useParams } from "react-router-dom";
import { addToMyCart, decreaseCartQty } from "pages/CheckoutPage/features/cartSlice";
import { useDispatch } from "react-redux";
import { Repeat } from "@mui/icons-material";

/* 

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
} */

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",

}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

function ProductDetailPage({ open, onClose, setLoading }) {
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const handlerAddToCart = (product) => {
    dispatch(addToMyCart(data?.product))
    //  navigate("/cart")
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { id } = useParams();
  console.log(id)
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });
  console.log(data)


  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      <Container margin="30px">
        {/* <DialogContent> */}
        <ProductDetailWrapper display={"flex"} flexDirection={matches ? "column" : "row"}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={data?.product.image[0].imageLink} alt={data?.product.image.name} />
          </Product>
          <ProductImage src={data?.product.image[0].imageLink} sx={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          </ProductImage>
          <ProductDetailInfoWrapper>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {data?.product.name}
            </Typography>
            <Typography variant="body">
              {data?.product.description}
            </Typography>
            <Typography variant="subtitle">SKU: 12345</Typography>
            <Typography variant="subtitle">{`Availability: ${data?.product.stock[data?.product.stock.length - 1].total} in stock`}</Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box sx={{ margin: '0 auto' }}>
                <Button variant="contained" sx={{ borderRadius: 28, backgroundColor: '#ffb2cc' }} onClick={() => handlerAddToCart(data.product)}>Add to Cart</Button>
              </Box>
            </Box>
            {/* <Box
              display="flex"
              alignItems="center"
            //sx={{ mt: 4, color: Colors.light }}
            >
              <FavoriteIcon sx={{ mr: 2 }} />
              Add to wishlist
            </Box> */}
            <Box
              sx={{
                mt: 4,
                //color: #e6f2ff,
              }}
            >
              <FacebookIcon />
              <TwitterIcon sx={{ pl: 2 }} />
              <InstagramIcon sx={{ pl: 2 }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>

      </Container>
    </>

  );
}

export default ProductDetailPage;