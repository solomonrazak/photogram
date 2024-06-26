// import { useUserAuth } from "@/context/userAuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import { getAuth } from "firebase/auth";
import { Loading } from "../loading/Loading";

interface IProtectedRoutesProps {

}

const ProtectedRoutes = ({}: IProtectedRoutesProps) => {

    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    ;
    const location = useLocation();

    if (loading){
      return <div><Loading /></div>
    }

  return user ? (<Outlet />) : <Navigate to="/login" state={{from: location}}/>

}

export default ProtectedRoutes;