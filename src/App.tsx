import { RouterProvider } from "react-router-dom"
import router from "./routes"

interface IAppProps {

}

const App = ({}: IAppProps) => {
  return <RouterProvider router={router} />
}
export default App