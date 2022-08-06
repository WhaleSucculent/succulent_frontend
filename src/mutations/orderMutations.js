import {gql} from '@apollo/client'

const UPDATE_ORDER = gql`
    mutation updateOrder($id:ID!, $orderStatus:String!){
        updateOrder(id:$id, orderStatus:$orderStatus){
            id
            orderStatus
            orderDate
          }
    }
`
export {UPDATE_ORDER}