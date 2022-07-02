import { GET_PRODUCTS } from "../../queries/productQueries";
import { useQuery } from "@apollo/client";

import Grid from '@mui/material/Grid';
import ProductCard from "components/ProductCard";

const CollectionsPage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <div>
      <Grid container spacing={3}>
          {!loading &&
            !error &&
            data.products.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard key={product.id} product={product} />
             </Grid>
            ))}
        
        
     </Grid>
    </div>
  );
};

export default CollectionsPage;
