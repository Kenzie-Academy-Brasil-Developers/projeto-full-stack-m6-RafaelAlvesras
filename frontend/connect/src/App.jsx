import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalReset } from "./styles/reset.js";
import { RoutesMain } from "./Routes/RoutesMain.jsx";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext.jsx";

function App() {
  const { isLoading } = useContext(UserContext);

  return (
    <>
      <GlobalReset />
      <ToastContainer />
      {isLoading ? <p>Carregando...</p> : <RoutesMain />}
    </>
  );
}

export default App;