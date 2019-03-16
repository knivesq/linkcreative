import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";

export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${props => props.color};
    icon: ${props => props.icon};
    padding: ${props => props.padding};
    margin: ${props => props.margin ? props.margin : '0 10px'};
    position: ${props => props.position};
    z-index: 1000;
    &:hover {
        color: ${props => props.hovercolor}
    };
`;