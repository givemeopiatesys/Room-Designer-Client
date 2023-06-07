import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
