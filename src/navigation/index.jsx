import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Headerr } from "../components/Headerr.tsx";
import Home from "../pages/Home";
//import { Login } from "../pages/Login/index.tsx";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PaymentSuccess from "../pages/PaymentSuccess";
import Pricing from "../pages/Pricing";
import { Footer } from "../components/Footer.tsx";

const Navigation = () => {

    return (
        <BrowserRouter>
            <Headerr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigation;