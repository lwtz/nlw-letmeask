import { useContext }  from "react"
import { AuthContext } from "../contexts/AuthContext"

export function useAuth() {
    return useContext( AuthContext )
    // const value = useContext( AuthContext )
    // return value
}
