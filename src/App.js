import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp } from "./pages";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/home" />
                <Route path="/deposit" />
                <Route path="/withdraw" />
            </Routes>
        </BrowserRouter>
    );
}
