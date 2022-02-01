import { Form, Input, Button, Container, LinkStyled } from "../../components";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { handleChange } from "../../handlers";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    return (
        <Container>
            <img src={logo} height={50} width={150} alt="Logo MyWallet" />
            <Form>
                <Input
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    onChange={(e) => handleChange(setFormData, formData, e)}
                    value={formData.email}
                    required
                />
                <Input
                    name="password"
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => handleChange(setFormData, formData, e)}
                    value={formData.password}
                    required
                />

                <Button type="submit">Entrar</Button>
            </Form>

            <LinkStyled to="/sign-up">Primeira vez? Cadastre-se!</LinkStyled>
        </Container>
    );
}
