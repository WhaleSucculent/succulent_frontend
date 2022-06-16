import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      name
      id
      postDate
      colors
    }
  }
`;

export { GET_PRODUCTS };
