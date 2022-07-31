import { useQuery } from "@apollo/client"
import { GET_ME } from "./customerQueries"

// customized hook to get current user
export const useMeQuery = () => {
  return useQuery(GET_ME)
}