import PublicRoutes from "./routes/PublicRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Error from "./components/Error/Error";
import { setError } from "./redux/Errors/Reducer";
import { HOME } from "./routes/RouteLinks";
import "./assets/css/style.css";

function App() {


    return (
        <BrowserRouter>

            {/* Header Start Here */}
            <Header />
            {/* Header End Here */}

            <PublicRoutes />

            {/* Error Here */}
            <Error />
            {/* Error Here */}

            {/* Footer Start Here */}
            <Footer />
            {/* Footer End Here */}

        </BrowserRouter>
    );
}

export default App;
