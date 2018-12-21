import styled from "styled-components";


export const ListWrap = styled.ul.attrs({
    padding: props => props.padding || '10px',
    margin: props => props.margin || '',
    fontSize: props => props.fontSize || '1.3rem',
})`
    float: ${props => props.float};
    width:${props => props.width};
    height: ${props => props.height};
    list-style: ${props => props.liststyle};
    padding: ${props => props.padding}; //lembrar que o padding remove os discos
    font-size: ${props => props.fontSize};
    margin:${props => props.margin};
    color: ${props => props.color};
    opacity: ${props => props.opacity}
    position: ${props => props.position};
    overflow: ${props => props.overflow};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
    display: ${props => props.display};
`;

export const ListItem = styled.li`
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    margin:${props => props.margin};
    color: ${props => props.color};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
    cursor: ${props => props.cursor};
`;
