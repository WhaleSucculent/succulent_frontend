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
  mutation registerCustomer($email: String!, $password: String!){
    registerCustomer(email: $email, password: $password){
      userId
      token
    }
  }    
`

export { REGISTER_CUSTOMER, LOGIN_CUSTOMER }