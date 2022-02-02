import { Title, Logout, MainDisplay, ButtonHome } from "../../components";
import styled from "styled-components";
import logout from "../../assets/back.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [confirmLogout, setConfirmLogout] = useState(false);

    return (
        <Container>
            <TopContent>
                <Title>Olá, Fulano</Title>
                <Logout
                    onClick={() => setConfirmLogout(!confirmLogout)}
                    clicked={confirmLogout}
                    src={logout}
                    alt="Logout icon"
                />
            </TopContent>
            <MainDisplay>Não há registros de entrada ou saída</MainDisplay>
            <BottomContent>
                <Link to="/deposit">
                    <ButtonHome>
                        <img width={25} height={25} src={plus} alt="Icon add deposit" />
                        Nova
                        <br />
                        entrada
                    </ButtonHome>
                </Link>
                <Link to="/withdraw">
                    <ButtonHome>
                        <img width={25} height={25} src={minus} alt="Icon add withdraw" />
                        Nova
                        <br />
                        saída
                    </ButtonHome>
                </Link>
            </BottomContent>
        </Container>
    );
}

const TopContent = styled.div`
    width: 100%;

    padding-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BottomContent = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 15px;
`;

const Container = styled.div`
    height: 100vh;
    padding: 15px 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;

    background-color: #8c11be;
`;
