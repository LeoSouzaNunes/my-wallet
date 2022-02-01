import styled from "styled-components";

const Logout = styled.img`
    color: ${(props) => (props.clicked ? "#FF0000" : "#FFFFFF")};
`;

export default Logout;
