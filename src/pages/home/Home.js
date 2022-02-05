import {
    Title,
    Logout,
    MainDisplay,
    ButtonHome,
    TradesContainer,
    Trade,
} from "../../components";
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
    const [trades, setTrades] = useState(null);
    const [totalColor, setTotalColor] = useState(false);
    const { token, setToken, setId } = useAuth();
    const { userId } = useParams();
    const total = handleBalance(trades);

    useEffect(() => {
        if (total > 0) {
            setTotalColor(true);
        } else {
            setTotalColor(false);
        }
    }, [total]);

    function handleBalance(trades) {
        let total = 0;
        trades?.forEach((trade) => {
            if (trade.type === "deposit") {
                total += Number(trade.value);
            } else total -= Number(trade.value);
        });
        return total;
    }

    useEffect(() => {
        const promise = getHomeData(token, userId);
        promise
            .then((response) => {
                setUsername(response.data.name);
                setTrades(response.data.history);
                setId(userId);
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
                <Title>Olá, {username ? username : ""}</Title>
                <Logout
                    onClick={handleConfirmLogout}
                    clicked={confirmLogout}
                    src={logout}
                    alt="Logout icon"
                />
            </TopContent>
            <MainDisplay>
                {trades ? (
                    <>
                        <TradesContainer>
                            {trades.map((trade) => (
                                <Trade key={trade.text}>
                                    <Span>
                                        <span>{trade.time}</span>
                                        <p>{trade.text}</p>
                                    </Span>
                                    <Value type={trade.type}>
                                        {Number(trade.value).toFixed(2).replace(".", ",")}
                                    </Value>
                                </Trade>
                            ))}
                        </TradesContainer>
                        <Total>
                            <span>VALOR</span>
                            <TotalValue status={totalColor}>
                                {total.toFixed(2).replace(".", ",")}
                            </TotalValue>
                        </Total>
                    </>
                ) : (
                    <EmptyTrades>Não há registros de entrada ou saída</EmptyTrades>
                )}
            </MainDisplay>
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

const EmptyTrades = styled.p`
    padding-top: 200px;

    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;

    color: #868686;
`;

const Total = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
        font-style: normal;
        font-weight: bold;
        font-size: 1.063rem;

        color: #000000;
    }
`;

const TotalValue = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.063rem;

    color: ${(props) => (props.status ? "#03ac00" : "#C70000")};
`;

const Span = styled.span`
    display: flex;
    gap: 5px;
    span {
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;

        color: #c6c6c6;
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;

        color: #000000;
    }
`;

const Value = styled.p`
    color: ${(props) => (props.type === "deposit" ? "#03AC00" : "#C70000")};
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
`;

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
