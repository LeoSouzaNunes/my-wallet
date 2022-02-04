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
    const [formData, setFormData] = useState({
        value: "",
        text: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            ...formData,
            type: "withdraw",
        };

        try {
            await postWithdraw(data, token);
            navigate(`/home/${id}`);
        } catch (error) {
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
                    required
                />
                <Input
                    name="text"
                    placeholder="Descrição"
                    type="text"
                    onChange={(e) => handleChange(setFormData, formData, e)}
                    value={formData.text}
                    required
                />
                <Button type="submit">Salvar saída</Button>
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
