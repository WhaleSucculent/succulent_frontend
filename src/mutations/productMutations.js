import { gql } from '@apollo/client'

const ADD_PRODUCT = gql`
  mutation addProduct($name: String!, $priceList:[PriceListInput]!, $postDate: String!, $size: SizeInput!, $category:String!, $rare:Boolean!, $description:String!, $productStatus:String!,$colors:[String]!,$imageIds:[ID]!, $quantity:Int!){
    addProduct(name: $name, priceList: $priceList, postDate: $postDate, size: $size, category: $category, rare: $rare, description: $description, productStatus: $productStatus, colors: $colors, imageIds: $imageIds, quantity: $quantity){
      id
      name
      postDate
      size{
        length
        width
        radius
        height
      }
      priceList{
        price
        postDate
      }
      colors
      quantity
      rare
      category
      description
      productStatus
      image{
        name
      }
    }
  }
`
const UPDATE_PRODUCT = gql`
mutation updateProduct($id:ID!, $name: String!, $priceLists:[PriceListInput]!, $size: SizeInput!, $category:String!, $rare:Boolean!, $description:String!, $productStatus:String!,$colors:[String]!,$imageIds:[ID]!, $quantity:Int!){
  updateProduct(id:$id, name: $name, priceLists: $priceLists, size: $size, category: $category, rare: $rare, description: $description, productStatus: $productStatus, colors: $colors, imageIds: $imageIds, quantity: $quantity){
    id
    name
    postDate
    size{
      length
      width
      radius
      height
    }
    priceList{
      price
      postDate
    }
    colors
    quantity
    rare
    category
    description
    productStatus
    image{
      name
    }
  }
}
`
const DELETE_PRODUCT = gql`
mutation deleteProduct($id:ID!){
  deleteProduct(id:$id){
    id
    name
    postDate
    size{
      length
      width
      radius
      height
    }
    priceList{
      price
      postDate
    }
    colors
    quantity
    rare
    category
    description
    productStatus
    image{
      name
    }
  }
}
`

export { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT }