import { gql } from "@apollo/client";

const ORDER_DETAILS = gql`
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

const GET_ORDERS = gql`
  query getOrders {
    orders{
      id
      orderDate
      orderStatus
      customer{
        id
        firstName
        lastName
        email
      }
      shippingAddress{
        apartment
        city
        state
      }
      billingAddress{
        apartment
        city
        state
      }
      
    }
  }
`
export { ORDER_DETAILS, GET_ORDERS };
