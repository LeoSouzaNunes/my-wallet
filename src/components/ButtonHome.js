import styled from "styled-components";

const ButtonHome = styled.div`
    padding: 10px 10px;

    display: flex;
    flex-direction: column;
    gap: 25px;

    min-width: 155px;
    min-height: 114px;
    font-style: normal;
    font-weight: bold;
    font-size: 1.063rem;
    line-height: 20px;

    color: #ffffff;

    background: #a328d6;
    border-radius: 5px;
    :hover {
        cursor: pointer;
    }
`;

export default ButtonHome;
