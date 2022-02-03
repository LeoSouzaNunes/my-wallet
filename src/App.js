import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, Home, Deposit, Withdraw } from "./pages";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/home/:userId" element={<Home />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
