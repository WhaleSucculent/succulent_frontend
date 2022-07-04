import { GET_PRODUCTS } from "../../queries/productQueries";
import { useQuery } from "@apollo/client";

import Grid from '@mui/material/Grid';
import ProductCard from "components/ProductCard";
import PaginationComp from './PaginationComp';
import LineStrip from './LineStrip';
const CollectionsPage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <div>
      <LineStrip />
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
     
    </div>
  );
};

export default CollectionsPage;
