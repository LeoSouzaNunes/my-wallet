import styled from "styled-components";

const Input = styled.input`
    border-style: none;
    width: 100%;
    height: 58px;
    padding: 15px 15px;

    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;

    background: #ffffff;
    border-radius: 5px;
    ::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 1.25rem;

        color: #000000;
        opacity: 1;
    }
    ::-webkit-input-placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 1.25rem;

        color: #000000;
    }
    :-ms-input-placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 1.25rem;

        color: #000000;
    }
`;

export default Input;
