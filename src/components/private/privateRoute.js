import {Navigate ,Outlet} from "react-router-dom"

export const PrivateRoute = ({authenticated, redirectOn ,isLoading})=>{
     
    return (authenticated || isLoading) ? <Outlet/> : <Navigate to={redirectOn}/>
}
export const AdminPrivateRoute = ({authenticated, redirectOn ,isLoading,user,onlyFor})=>{
     console.log(user.role)
    return ((authenticated || isLoading) && (user.role===onlyFor)) ? <Outlet/> : <Navigate to={redirectOn}/>
}