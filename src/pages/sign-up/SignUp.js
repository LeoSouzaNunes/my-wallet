import { Form, Input, Button, Container, LinkStyled } from "../../components";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { handleChange } from "../../handlers";

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [confirmPasswordData, setConfirmPasswordData] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (confirmPasswordData !== formData.password) {
            alert("Por favor informe senhas iguais!");
            return;
        }
    }

    return (
        <Container>
            <img src={logo} height={50} width={150} alt="Logo MyWallet" />
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input
                    name="name"
                    placeholder="Nome"
                    type="text"
                    onChange={(e) => handleChange(setFormData, formData, e)}
                    value={formData.name}
                    required
                />
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
                <Input
                    placeholder="Confirme a senha"
                    type="password"
                    onChange={(e) => setConfirmPasswordData(e.target.value)}
                    value={confirmPasswordData}
                    required
                />

                <Button type="submit">Cadastrar</Button>
            </Form>

            <LinkStyled to="/login">Já tem uma conta? Entre agora!</LinkStyled>
        </Container>
    );
}