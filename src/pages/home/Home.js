import { Title, Logout, MainDisplay, ButtonHome } from "../../components";
import styled from "styled-components";
import logout from "../../assets/back.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getHomeData } from "../../services/requests";
import useAuth from "../../hooks/useAuth";
import { handleCancelLogout } from "../../handlers";

export default function Home() {
    const navigate = useNavigate();
    const [confirmLogout, setConfirmLogout] = useState(false);
    const [username, setUsername] = useState(undefined);
    const { token, setToken, setId } = useAuth();
    const { userId } = useParams();
    setId(userId);

    useEffect(() => {
        const promise = getHomeData(token, userId);
        promise
            .then((response) => {
                setUsername(response.data);
            })
            .catch((error) => {
                console.log(error);
                setToken("");
                setId("");
                navigate("/");
            });
    }, []);

    function handleConfirmLogout() {
        if (confirmLogout === true) {
            setToken("");
            setId("");
            navigate("/");
        }
        setConfirmLogout(!confirmLogout);
    }

    return (
        <Container onClick={() => handleCancelLogout(confirmLogout, setConfirmLogout)}>
            <TopContent>
                <Title>Olá, {username ? username : "not found"}</Title>
                <Logout
                    onClick={handleConfirmLogout}
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
