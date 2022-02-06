import { Form, Input, Button, Container, LinkStyled } from "../../components";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { handleChange } from "../../handlers";
import { login } from "../../services/requests";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const [lockComponent, setLockComponent] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        setLockComponent(true);
        try {
            const promise = await login(formData);
            setToken(promise.data.token);
            setLockComponent(false);
            navigate(`/home/${promise.data.userId}`);
        } catch (error) {
            setLockComponent(false);
            console.log(error);
        }
    }

    return (
        <Container>
            <img src={logo} height={50} width={150} alt="Logo MyWallet" />
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    onChange={(e) => handleChange(setFormData, formData, e)}
                    value={formData.email}
                    disabled={lockComponent}
                    required
                />
                <Input
                    name="password"
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => handleChange(setFormData, formData, e)}
                    value={formData.password}
                    disabled={lockComponent}
                    required
                />

                <Button type="submit" disabled={lockComponent}>
                    Entrar
                </Button>
            </Form>

            <LinkStyled to="/sign-up">Primeira vez? Cadastre-se!</LinkStyled>
        </Container>
    );
}
