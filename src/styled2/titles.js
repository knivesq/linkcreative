import styled from "styled-components";


export const TitleWrap = styled.div.attrs({
    padding: props => props.padding || '10px',
    margin: props => props.margin || 'auto auto',
    fontSize: props => props.fontSize || '1.3rem',
})`
    float: ${props => props.float};
    width:${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding};
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


export const Title1 = styled.h1`
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    margin:${props => props.margin};
    color: ${props => props.color};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
`;

export const Title2 = styled.h2`
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    margin:${props => props.margin};
    color: ${props => props.color};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
`;

export const Title3 = styled.h3`
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    margin:${props => props.margin};
    color: ${props => props.color};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
`;

export const Title4 = styled.h4`
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    margin:${props => props.margin};
    color: ${props => props.color};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
`;

export const Title5 = styled.h5`
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    margin:${props => props.margin};
    color: ${props => props.color};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
`;

export const Title6 = styled.h6`
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    margin:${props => props.margin};
    color: ${props => props.color};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
`;