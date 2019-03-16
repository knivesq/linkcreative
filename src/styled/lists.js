import styled from "styled-components";


export const ListWrap = styled.ul`
    float: ${props => props.float};
    width:${props => props.width};
    height: ${props => props.height};
    list-style: ${props => props.listStyle};
    padding: ${props => props.padding ? props.padding : '10px'}; //lembrar que o padding remove os discos
    font-size: ${props => props.fontSize ? props.fontSize : '1.3rem'};
    margin:${props => props.margin};
    color: ${props => props.color};
    opacity: ${props => props.opacity}
    position: ${props => props.position};
    overflow: ${props => props.overflow};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
    display: ${props => props.display};
    transform: ${props => props.transform};
    transition: ${props => props.transition};
`;

export const ListItem = styled.li`
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    margin:${props => props.margin};
    color: ${props => props.color};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
    cursor: ${props => props.cursor};
    list-style: ${props => props.listStyle};
    left: ${props => props.left};
    transform: ${props => props.transform};
    transition: ${props => props.transition};
    perspective: ${props => props.perspective};
    transform-style: ${props => props.transstyle};
    backface-visibility: ${props => props.backvisibility};
    transform: ${props => props.transform};
    transform-origin: ${props => props.transformorigin};
    overflow: ${props => props.overflow};
`;
