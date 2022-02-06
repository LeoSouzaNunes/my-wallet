import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Title, Input, Button, Form } from "../../components";
import { handleChange } from "../../handlers";
import useAuth from "../../hooks/useAuth";
import { postWithdraw } from "../../services/requests";

export default function Withdraw() {
    const navigate = useNavigate();
    const { token, id } = useAuth();
    const [lockComponent, setLockComponent] = useState(false);
    const [formData, setFormData] = useState({
        value: "",
        text: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        setLockComponent(true);
        const data = {
            ...formData,
            value: formData.value.replace(",", "."),
            type: "withdraw",
        };

        try {
            await postWithdraw(data, token);
            setLockComponent(false);
            navigate(`/home/${id}`);
        } catch (error) {
            setLockComponent(false);
            console.log(error);
        }
    }

    return (
        <Container>
            <Title>Nova saída</Title>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input
                    name="value"
                    placeholder="Valor"
                    type="text"
                    onChange={(e) => handleChange(setFormData, formData, e)}
                    value={formData.value}
                    disabled={lockComponent}
                    required
                />
                <Input
                    name="text"
                    placeholder="Descrição"
                    type="text"
                    onChange={(e) => handleChange(setFormData, formData, e)}
                    value={formData.text}
                    disabled={lockComponent}
                    required
                />
                <Button type="submit" disabled={lockComponent}>
                    Salvar saída
                </Button>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    padding: 25px 25px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    background-color: #8c11be;
`;
