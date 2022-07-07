import { GET_PRODUCTS } from "../../queries/productQueries";
import { useQuery } from "@apollo/client";
import OnlyInStock from './OnlyInStock';
import Grid from '@mui/material/Grid';
import ProductCard from "components/ProductCard";
import PaginationComp from './PaginationComp';
import LineStrip from './LineStrip';
import PriceMinMax from './PriceMinMax';
import SortBy from "./SortBy";


const CollectionsPage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);
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
          {!loading &&
            !error &&
            data.products.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard key={product.id} product={product} />
             </Grid>

            ))}
        
        <Grid align="center" xs={12} sm={12} md={12} lg={12} item >
          <PaginationComp  />
          </Grid>
     </Grid>
     <PriceMinMax />
      <OnlyInStock />
      <SortBy />
    </div>
  );
};

export default CollectionsPage;
