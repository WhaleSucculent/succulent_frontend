import { gql } from "@apollo/client";

const GET_CUSTOMERS = gql`
   query getCustomers{
      customers{
        id
        email
        firstName
        lastName
        status
        role
        avatar
        orders{
           id
           shippingAddress{
             firstName
             lastName
             apartment
             city
             country
             state
           }
           billingAddress{
             firstName
             lastName
             city
           }
           orderDate
           orderStatus
           productsInCart{
             qty
             price
             product{
               name
               description
               
             }
           }
        }
       addresses{
         firstName
         city
         lastName
       }
 creditCards{
   cardNo
   holderName
   expirationDate
 }
      }
   }
`
const GET_CUSTOMER = gql`
   query getCustomer($id: ID!){
      customer(id: $id){
         id
         email
         firstName
         lastName
         avatar
         orders{
            id
            shippingAddress{
              firstName
              lastName
              apartment
              city
              country
              state
              
            }
            billingAddress{
              firstName
              lastName
              city
            }
            orderDate
            orderStatus
            productsInCart{
              qty
              price
              product{
                name
                description
                
              }
            }
         }
				addresses{
          firstName
          city
          lastName
        }
  creditCards{
    cardNo
    holderName
    expirationDate
  }
      }

   }
`;

const GET_ME = gql`
  query getMe{
    me {
      id
      email
      firstName
      lastName
      role
      phone
      avatar
      orders{
        id
        orderDate
        orderStatus
        shippingAddress{
          firstName
          lastName
          apartment
          city
          country
          state
          zipcode
          address
        }
        billingAddress{
          firstName
          lastName
          city
        }
        productsInCart{
          qty
          price
          product{
            name
            description
          }
        }
      }
      creditCards{
        cardNo
        holderName
        expirationDate
      }
    }
}`



export { GET_CUSTOMERS, GET_CUSTOMER, GET_ME };