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
      review {
        stars
      }
    }
  }
`;

const GET_ADMIN_PRODUCTS = gql`
  query getAdminProducts {
    products{
      name
      priceList{
        price
      }
      postDate
      review{ 
        stars
      }
      description
      productStatus
      stock{
        actionAmount
      }
      image{
        name
        imageLink
      }

    }
  }
`;

export { GET_PRODUCTS, GET_ADMIN_PRODUCTS };
