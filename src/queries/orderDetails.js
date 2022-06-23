import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      description
      priceList {
        price
      }
    }
  }
`;

export { GET_PRODUCTS };
