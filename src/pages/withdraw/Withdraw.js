import styled from "styled-components";
import { Title, Input, Button, Form } from "../../components";

export default function Withdraw() {
    return (
        <Container>
            <Title>Nova saída</Title>
            <Form>
                <Input placeholder="Valor" type="text" />
                <Input placeholder="Descrição" type="text" />
                <Button>Salvar saída</Button>
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
