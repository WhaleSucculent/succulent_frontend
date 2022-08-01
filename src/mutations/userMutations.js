import { gql } from '@apollo/client'

const LOGIN_CUSTOMER = gql`
  mutation loginCustomer($email: String!, $password: String!){
    loginCustomer(email: $email, password: $password){
      userId
      token
    }
  }    
`

const REGISTER_CUSTOMER = gql`
  mutation registerCustomer($email: String!, $password: String!, $firstName: String!, $lastName: String!){
    registerCustomer(email: $email, password: $password, firstName: $firstName, lastName: $lastName){
      userId
      token
    }
  }    
`
const LOGOUT_CUSTOMER = gql`
  mutation logoutCustomer{
    logoutCustomer{
      userId
      token
    }
  }
`

const GET_CUSTOMER = gql`
  query getCustomer($userId: ID!){
    getCustomer(userId: $userId){
      userId
      email
      firstName
      lastName
      token
    }
  }    
`

const REQUEST_RESET = gql`
    mutation requestReset($email: String!){
    requestReset(email: $email){
      result
    }
  }    
`


export { REGISTER_CUSTOMER, LOGIN_CUSTOMER, REQUEST_RESET, LOGOUT_CUSTOMER }