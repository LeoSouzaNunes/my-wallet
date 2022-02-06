import styled from "styled-components";

const Button = styled.button`
    border-style: none;
    width: 100%;
    height: 46px;

    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;

    color: #ffffff;

    background-color: #a328d6;
    border-radius: 5px;

    :hover {
        cursor: pointer;
    }
    :disabled {
        opacity: 0.8;
    }
`;

export default Button;
