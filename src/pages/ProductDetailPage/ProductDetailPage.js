import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import ProductCard from "./Card";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
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
import {
  addToMyCart,
  decreaseCartQty,
} from "pages/CheckoutPage/features/cartSlice";
import { useDispatch } from "react-redux";
import { Repeat } from "@mui/icons-material";
import Title from "pages/AdminHomePage/components/Title";
import Loading from "../../components/Loading";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
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
    dispatch(addToMyCart(data?.product));
    //  navigate("/cart")
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { id } = useParams();
  console.log(id);

  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });
  console.log(data);
  const { data: productsDetail } = useQuery(GET_PRODUCTS);

  const [quantity, setQuantity] = useState(1);

  const cartHandler = (e) => {
    e.preventDefault();
    handlerAddToCart();
  };
  if (loading) return <Loading />;
  if (error) return <p>Something Went Wrong</p>;
  const getRating = () => {
    return data.product.review.length > 0 ? data.product.review[0].stars : 0;
  };
  return (
    <>
      <Container sx={{ marginBottom: "40px" }}>
        {/* <DialogContent> */}
        <Box margin="30px">
          <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
            <Product sx={{ height: "80%" }}>
              <ProductImage
                src={data?.product.image[0].imageLink}
                height="auto"
                alt={data?.product.image.name}
              />
            </Product>

            <ProductDetailInfoWrapper>
              <Typography sx={{ lineHeight: 2 }} variant="h4" align="left">
                {data?.product.name}
              </Typography>
              <Typography
                sx={{ marginTop: "0px !important" }}
                variant="body"
                align="left"
              >
                <Rating
                  name="half-rating-read"
                  defaultValue={getRating()}
                  precision={0.5}
                  readOnly
                />
              </Typography>
              <Typography
                sx={{ lineHeight: 2, marginBottom: "20px" }}
                variant="h5"
                align="left"
              >
                ${data?.product.priceList[0].price}
              </Typography>
              <Typography
                variant="body"
                align="left"
                sx={{ marginBottom: "20px" }}
              >
                {data?.product.description}
              </Typography>

              <Typography variant="subtitle" align="left">
                <span style={{ fontWeight: "bold" }}>Product Id: </span>
                {data.product.id}
              </Typography>
              <Typography variant="subtitle" align="left" sx={{}}>
                <span style={{ fontWeight: "bold" }}>Availability: </span>
                {`${
                  data?.product.stock[data?.product.stock.length - 1].total
                } in stock`}
              </Typography>
              <Typography
                sx={{ marginBottom: "20px" }}
                variant="subtitle"
                align="left"
              >
                <span style={{ fontWeight: "bold" }}>Size: </span>
                {data?.product.size.width}
              </Typography>
              <Box sx={{ marginRight: "auto" }}>
                <form onSubmit={cartHandler}>
                  <TextField
                    margin="20px"
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      if (e.target.value > data.product.quantity) {
                        e.target.value = data.product.quantity;
                      } else {
                        setQuantity(e.target.value);
                      }
                    }}
                    InputProps={{
                      inputProps: {
                        min: 1,
                      },
                    }}
                  />
                  <Box
                    sx={{ mt: 4 }}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box sx={{ marginRight: "auto" }}>
                      <Button
                        variant="contained"
                        sx={{ borderRadius: 28, backgroundColor: "#ffb2cc" }}
                        type="submit"
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                </form>
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
                  color: "#6DC9F7",
                  marginRight: "auto",
                }}
              >
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </Box>
            </ProductDetailInfoWrapper>
          </ProductDetailWrapper>
        </Box>
        <Container sx={{ height: "35%" }}>
          <Box sx={{ padding: "20px" }}>
            <Title>Related Products</Title>
          </Box>
      
            {!loading && !error && (
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{width:'100%', height:'100%'}}
              >
                {productsDetail?.products.slice(0, 3).map((product) => (
                <SwiperSlide key={product.id} style={{width:'100%', height:'100%'}}>
                  
                  <ProductCard key={product.id} product={product} />
                  
                </SwiperSlide>
                ))}
              </Swiper>
            )}
     
        </Container>
      </Container>
    </>
  );
}

export default ProductDetailPage;
