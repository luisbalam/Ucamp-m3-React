import "./App.css";
import Layout from "./components/Layout/Layout";
import RoutesComponent from "./routes/Routes";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// Importo Provider
import { UserProvider } from "./context/UserContext";
import { CategoryProvider } from "./context/CategoryContext";
// * Components
import Button from "react-bootstrap/Button";

function App() {
  return (
    <UserProvider>
      <CategoryProvider>
        <PayPalScriptProvider
          option={{
            "client-id":
              "AWV0XlWbqL5InL9DOvl1Sn7WZTasAzAMlQLDuhu5QXqD9E_ozj_dbI-QpkDg3zA4UslHvgnhjwGLMuMM",
          }}
        >
          <Layout>
            <h1>My App</h1>
            <Button> Hola c:</Button>
            <RoutesComponent />
          </Layout>
        </PayPalScriptProvider>
      </CategoryProvider>
    </UserProvider>
  );
}

export default App;
