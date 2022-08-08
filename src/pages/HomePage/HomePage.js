import React from "react";
import Carousel from "./Carousel";
import { GET_PRODUCTS } from "../../queries/productQueries";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import ProductCard from "components/ProductCard";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import { Height } from "@mui/icons-material";
import { CircularProgress, Divider, Toolbar, Typography } from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
import img from "assets/images/map.jpg";
import { Link } from "react-router-dom";
import Promotion from "components/Promotion";
import Loading from "components/Loading";
import SlideShow from "components/SlideShow";
import Banner from "components/Banner";
import Category from "components/Category";
import { motion } from "framer-motion";
import OnScrollAnimationBox from "components/OnScrollAnimationBox";
import { CartButton } from "components/CartButton/CartButton";
import Footer from "components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Title from "pages/AdminHomePage/components/Title";

const cardVariants = {
  offscreen: {
    y: 200,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.6
    }
  }
};

function Item(props) {
  const { sx, ...other } = props;
  return (
    <>
      <Box
        sx={{
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    </>
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);
  if (loading) return <Loading />
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <Banner />
      <Carousel />
      <OnScrollAnimationBox>
        <Promotion />
      </OnScrollAnimationBox>
      <OnScrollAnimationBox>
        <Category />
      </OnScrollAnimationBox>

      {/* <OnScrollAnimationBox> */}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", flex: 1 }}>
        <Title>
          Featured Products
        </Title>
      </Box>
      <Swiper slidesPerView={5} modules={[Pagination]} >
        {data.products.map(product => (
          <SwiperSlide style={{ paddingBottom: "2px" }}>
            <ProductCard key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Container >
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", Height: "20px" }}>
          {!loading &&
            !error &&
            data.products.slice(0, 8).map((product) => (
              <Grid container spacing={2} columns={12} key={product.id} >
                <Item xs={4} lg={3} >
                  <ProductCard key={product.id} product={product} />
                </Item>
              </Grid>
            ))}
        </Box>
      </Container> */}
      {/* </OnScrollAnimationBox> */}

      <OnScrollAnimationBox>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", flex: 1 }}>
          <Title>
            Featured Categories
          </Title>
        </Box>
        <Container>
          <Box component={motion.div} variants={thumbnailVariants} sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(1, minmax(1, 2))", Height: "20px" }}>
            {!loading &&
              !error &&
              data.products.slice(3, 6).map((product) => (
                <Grid container spacing={2} columns={12} key={product.id} component={motion.div} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
                  <Item xs={4} lg={3} component={motion.div} variants={cardVariants}>
                    <ProductCard key={product.id} product={product} />
                  </Item>
                </Grid>
              ))}
          </Box>
        </Container>
      </OnScrollAnimationBox>

      {/* <Box padding={7}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <img src={img} height={200} width={300} />
          <div>
            <h4>Store Hours</h4>
            <p>Monday-Friday: 1pm-6pm</p>
            <p>Saturday: 2pm-6pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h4>Store Location</h4>
            <p>774 Gordon Baker Rd</p>
            <p>North York, ON M2H 3B4</p>
            <Link to='javascript:void(0)' onClick={() => window.location = 'mailto:info@whalesucculent.ca'}>
              info@whalesucculent.ca
            </Link>

          </div>
        </div>


      </Box> */}
      <OnScrollAnimationBox>
        <Box component={motion.div} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={cardVariants}>
          <SlideShow />
          <Box sx={{ display: "flex", justifyContent: "center", width: "100%", flex: 1 }}>
            <Title>
              New Collections
            </Title>
          </Box>
        </Box>
      </OnScrollAnimationBox>
      <OnScrollAnimationBox>
        <Container>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", Height: "20px" }}>
            {!loading &&
              !error &&
              data.products.slice(0, 3).map((product) => (
                <Grid container spacing={2} columns={12} key={product.id}>
                  <Item xs={4} lg={3}>
                    <ProductCard key={product.id} product={product} />
                  </Item>
                </Grid>
              ))}
          </Box>
        </Container>
      </OnScrollAnimationBox>


      <Footer />
    </div>

  );
};

export default HomePage;
