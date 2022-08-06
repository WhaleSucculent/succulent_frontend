import { GET_PRODUCTS } from "../../queries/productQueries";
import { useQuery } from "@apollo/client";
import OnlyInStock from './OnlyInStock';
import Grid from '@mui/material/Grid';
import ProductCard from "components/ProductCard";
import PaginationComp from './PaginationComp';
import LineStrip from './LineStrip';
import PriceMinMax from './PriceMinMax';
import SortBy from "./SortBy";
import Stack from '@mui/material/Stack';
import LineResults from "./LineResults";
import CollectionSidebar from './CollectionSidebar';
import { useState } from "react";

const CollectionsPage = () => {
  const [stockCheck, setstockCheck] = useState(false);
  const [priceMin, setpriceMin] = useState(0);
  const[priceMax, setpriceMax] = useState(0);

  const handleChange = () => {
    setstockCheck(!stockCheck);
    
  }

  const priceMinSet = (val) => {
    setpriceMin(val);
    console.log(priceMin);
  }
  const priceMaxSet = (val1) => {
    setpriceMax(val1);
    console.log(val1);

  }
  const priceSubmit = (e)=>{
    e.preventDefault();
    setpriceMax(e.target[1].value);
    setpriceMin(e.target[0].value);
    console.log(priceMin, priceMax);
    
    console.log(e);
  }
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <LineStrip />
        </Grid>
        
      </Grid>
      
      <Grid container spacing={3}>
        <Grid item md={2}>
          <CollectionSidebar priceMin={priceMin} priceMax={priceMax} priceMinSet={priceMinSet} priceMaxSet={priceMaxSet} stockCheck={stockCheck} handleChange={handleChange} priceSubmit={priceSubmit}/>
        </Grid>

          <Grid item md={10}>
          <Grid container spacing={3}>
        <Grid item xs={12}>
        <LineResults length={data.products.length}/>
        </Grid>
        
      </Grid>
          <Grid container spacing={3}>
          {!loading &&
            !error &&
             (data.products.filter(product => {
              if(stockCheck){
                console.log(stockCheck);
                return product.productStatus === "In Stock";
              }
              if(!stockCheck){
                return product.productStatus;
              }
            }).map((product) => (
             <Grid item xs={12} sm={6} md={4} key={product.id}>
              
               <ProductCard key={product.id} product={product} stockCheck={stockCheck}/>
              
             </Grid>
            )))}

            {/* {!loading && !error && stockCheck && (
              data.products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
              
                <ProductCard key={product.id} product={product}/>
               
              </Grid>
              ))
            )} */}

            </Grid>
          </Grid>
          
     </Grid>


    </div>
  );
};

export default CollectionsPage;
