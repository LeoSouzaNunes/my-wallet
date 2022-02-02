import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, Home, Deposit, Withdraw } from "./pages";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/withdraw" element={<Withdraw />} />
            </Routes>
        </BrowserRouter>
    );
}
