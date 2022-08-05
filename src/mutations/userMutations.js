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
const DELETE_CUSTOMER = gql`
    mutation deleteCustomer($id:ID!){
      deleteCustomer(id:$id){
        id
        firstName
        lastName
        email
      }
    }
`
const UPDATE_CUSTOMER = gql`
    mutation updateCustomer($id:ID!, $status:String!, $role:String!){
      updateCustomer(id:$id, status:$status, role:$role){
        id
        firstName
        lastName
        status
        role
        email
      }
    }
`

const RESET_PASSWORD = gql`
    mutation resetPassword($token:String!, $password:String!){
      resetPassword(token:$token, password:$password){
        result
      }
    }
`

export { REGISTER_CUSTOMER, LOGIN_CUSTOMER, REQUEST_RESET, DELETE_CUSTOMER, UPDATE_CUSTOMER, RESET_PASSWORD }
