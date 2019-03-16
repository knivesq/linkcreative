import styled from "styled-components";


export const StyledImage = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    position: ${props => props.position};
    z-index: ${props => props.zindex};
    max-width: 100%;
    box-shadow: ${props => props.shadow};
`;