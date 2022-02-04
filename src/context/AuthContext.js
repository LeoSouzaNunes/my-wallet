import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState("");
    const [id, setId] = useState("");

    return (
        <AuthContext.Provider value={{ token, setToken, id, setId }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
