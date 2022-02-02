import styled from "styled-components";

const Logout = styled.img`
    filter: ${(props) =>
        props.clicked
            ? `invert(26%) sepia(95%) saturate(6116%) hue-rotate(354deg) brightness(95%) contrast(120%)`
            : `invert(0%) sepia(98%) saturate(0%) hue-rotate(310deg) brightness(95%) contrast(102%)`};
    :hover {
        cursor: pointer;
    }
`;

export default Logout;
