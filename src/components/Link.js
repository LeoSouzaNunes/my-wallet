import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)`
    padding-top: 10px;

    font-style: normal;
    font-weight: bold;
    font-size: 0.938rem;
    line-height: 18px;
    text-align: center;

    color: #ffffff;

    :hover {
        cursor: pointer;
        color: #ce46ff;
    }
`;

export default LinkStyled;
