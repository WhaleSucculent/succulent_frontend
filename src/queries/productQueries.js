import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      name
      description
      priceList {
        price
      }
      review {
        stars
      }
    }
  }
`;

export { GET_PRODUCTS };