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
import Loading from "../../components/Loading";

const CollectionsPage = () => {
  const [stockCheck, setstockCheck] = useState(false);
  const [priceFilter, setpriceFilter] = useState(false);
  const [priceMin, setpriceMin] = useState("");
  const[priceMax, setpriceMax] = useState("");

  const handleChange = () => {
    setstockCheck(!stockCheck);
  }

  const priceMinSet = (val) => {
    setpriceFilter(false);
    setpriceMin(val);
  }
  const priceMaxSet = (val1) => {
    setpriceFilter(false);
    setpriceMax(val1);

  }
  const priceSubmit = (e)=>{
    e.preventDefault();
    setpriceMax(e.target[1].value);
    setpriceMin(e.target[0].value);
    setpriceFilter(true);
    console.log(priceMin, priceMax);
    console.log(e);
  }
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <Loading />;
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
                if(priceFilter){
                  if(priceMin === "" && priceMax === ""){
                    return product.productStatus === "In Stock";
                  }if(priceMin === "" && priceMax !== ""){
                    return product.productStatus === "In Stock" && product.priceList[0].price <= priceMax;
                  }if(priceMin !== "" && priceMax === ""){
                    return product.productStatus === "In Stock" && product.priceList[0].price >= priceMin;
                  }if(priceMin !== "" && priceMax !== ""){
                    return product.productStatus === "In Stock" && product.priceList[0].price >= priceMin && product.priceList[0].price <= priceMax;
                  }
              }else{
                return product.productStatus === "In Stock";
              }
              }
              if(!stockCheck){
                if(priceFilter){
                  if(priceMin === "" && priceMax === ""){
                    return product.productStatus;
                  }if(priceMin === "" && priceMax !== ""){
                    return product.productStatus  && product.priceList[0].price <= priceMax;
                  }if(priceMin !== "" && priceMax === ""){
                    return product.productStatus  && product.priceList[0].price >= priceMin;
                  }if(priceMin !== "" && priceMax !== ""){
                    return product.productStatus  && product.priceList[0].price >= priceMin && product.priceList[0].price <= priceMax;
                  }
                
              }else{
                return product.productStatus;
              }
            }
            }).map((product) => (
             <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard key={product.id} product={product} stockCheck={stockCheck}/>
             </Grid>
            )))}
            </Grid>
          </Grid>
          
     </Grid>


    </div>
  );
};

export default CollectionsPage;
