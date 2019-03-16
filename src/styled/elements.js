import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";



// fonts families
const HelveticaFamily = 'Helvetica, Arial, sans-serif';
const SegoeWPN = 'SegoeWPN, Arial, sans-serif';

// minhas variaveis

// bg
const myImagesUrl = 'http://localhost/linkstudio/public/images/';
const newFolder = 'new/';
const myImagesUrlFolder = 'whatwedo/';
const imagesUrlFolder = '';
const wrapperBg = urlText => (`url("${myImagesUrl}${newFolder}${urlText}")`);
const imageBg = urlText => (`url("${myImagesUrl}${myImagesUrlFolder}${urlText}")`);

//animations

const bgAnimation = keyframes`
    from { opacity: 0;}
	to { opacity: 1; }
`;

const paraleloAnimation = keyframes`
    0% { -webkit-transform: skew(30deg);}
    85% { -webkit-transform: skew(-50deg);}
    100% { -webkit-transform: skew(0deg);}
    
`;

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};


export const Element = styled.div`
    background-color: ${props => props.bgcolor};
    background-image: url(${props => props.bgimg});
    width:${props => props.width};
    max-width:${props => props.maxwidth ? props.maxwidth : '100% !important'};
    height: ${props => props.height};
    margin:${props => props.margin};
    padding: ${props => props.padding};
    float: ${props => props.float};
    display: ${props => props.display ? props.display : 'block'};
    z-index:${props => props.zindex};
    justify-content: ${props => props.content ? props.content : 'center'};
    align-items: ${props => props.items ? props.items : 'center'};
    flex-direction: ${props => props.direct ? props.direct : 'row'};
    position: ${props => props.position};
    border: ${props => props.border};
    border-radius: ${props => props.radius};
    opacity: ${props => props.opacity ? props.opacity : props.hidden == 'hidden' ? '0' :'1'}
    transition: ${props => props.transition};
    overflow: ${props => props.overflow};
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    text-align:${props => props.align};
    cursor: ${props => props.cursor};
    max-height: ${props => props.mheight};
    box-shadow: ${props => props.shadow};
    top: ${props => props.top};
    left: ${props => props.left};
    align-self: ${props => props.self};
    font-family: ${props => props.family ? props.family : SegoeWPN};
    letter-spacing:${props => props.ltrspc};
    line-height:${props => props.lineheight};
    box-sizing: border-box;  
    flex-wrap: ${props => props.flexwrap};
    background-position: ${props => props.bpos};
    background-repeat: ${props => props.brepeat};
    background-size: ${props => props.bsize};
    perspective: ${props => props.perspective};
    transform-style: ${props => props.transstyle};
    backface-visibility: ${props => props.backvisibility};
    transform: ${props => props.transform};
    transform-origin: ${props => props.transformorigin};
    
   @media only screen and (max-width: 320px) {
        max-width: 320px;
        overflow:hidden;
    }
`;

export const SpanStyled = styled.span`
    background-color: ${props => props.bgcolor};
    background-image: url(${props => props.bgimg});
    width:${props => props.width};
    max-width:${props => props.maxwidth ? props.maxwidth: '100% !important'};
    height: ${props => props.height};
    margin:${props => props.margin};
    padding: ${props => props.padding};
    float: ${props => props.float};
    display: ${props => props.display ? props.display : 'block'};
    z-index:${props => props.zindex};
    justify-content: ${props => props.content ? props.content : 'center'};
    align-items: ${props => props.items ? props.items : 'center'};
    flex-direction: ${props => props.direct ? props.direct : 'row'};
    position: ${props => props.position};
    border: ${props => props.border};
    border-radius: ${props => props.radius};
    opacity: ${props => props.hidden == 'hidden' ? '0' :'1'}
    transition: ${props => props.transition};
    overflow: ${props => props.overflow};
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    text-align:${props => props.align};
    cursor: ${props => props.cursor};
    max-height: ${props => props.mheight};
    box-shadow: ${props => props.shadow};
    top: ${props => props.top};
    font-family: ${props => props.family};
    letter-spacing:${props => props.ltrspc};
    line-height:${props => props.lineheight};
    box-sizing: border-box;  
    flex-wrap: ${props => props.flexwrap};
    background-position: ${props => props.bpos};
    background-repeat: ${props => props.brepeat};
    background-size: ${props => props.bsize};
    
   @media only screen and (max-width: 320px) {
        max-width: 320px;
        overflow:hidden;
    }
`;

export const Input = styled.input`
    width:${props => props.width};
    max-width: 100% !important;
    height: ${props => props.height};
    margin:${props => props.margin};
    padding: ${props => props.padding};
    float: ${props => props.float};
    z-index:${props => props.zindex};
    position: ${props => props.position};
    border: ${props => props.border};
    background: ${props => props.bg};
    border-radius: ${props => props.radius};
    opacity: ${props => props.hidden == 'hidden' ? '0' :'1'}
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    text-align:${props => props.align};
    cursor: ${props => props.cursor};
    max-height: ${props => props.mheight};
    box-shadow: ${props => props.shadow};
    top: ${props => props.top};
    border-style: ${props => props.bstyle};
    border: none;
    box-sizing: border-box;  
`;


export const Label = styled.label`
    width:${props => props.width};
    max-width: 100% !important;
    height: ${props => props.height};
    margin:${props => props.margin};
    padding: ${props => props.padding};
    float: ${props => props.float};
    z-index:${props => props.zindex};
    position: ${props => props.position};
    border: ${props => props.border};
    background: ${props => props.bg};
    border-radius: ${props => props.radius};
    opacity: ${props => props.hidden == 'hidden' ? '0' :'1'}
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    text-align:${props => props.align};
    cursor: ${props => props.cursor};
    max-height: ${props => props.mheight};
    box-shadow: ${props => props.shadow};
    top: ${props => props.top};
    border-style: ${props => props.bstyle};
    box-sizing: border-box;  
    font-size:  ${props => props.fsize};
`;

export const Paralelo = styled(Element)`
	-webkit-transform: skew(${props => props.skew}deg);
    -moz-transform: skew(${props => props.skew}deg);
    -o-transform: skew(${props => props.skew}deg);
    // animation: ${paraleloAnimation} 1.6s ease-in-out !important;
    shape-outside: polygon(100% 0, 100% 100%, 0 100%);
    clip-path: polygon(${props => props.clip});
`;

export const TeamBlock = styled(Element)`
    transition: width 0.5s ease-in, height 0.5s ease-in !important;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 25px;
    clip-path: polygon(88% 13%, 100% 64%, 63% 100%, 9% 84%, 0 37%, 36% 0);
`;
export const StyledImageButBg = styled(Element).attrs({
    background: props => imageBg(props.background),
    bgsize: props => props.bgsize || '100% 100%'
})`
    
    background-size: ${props => props.bgsize};
    background: ${props => props.background};
    background-repeat: no-repeat;
    width: ${props => props.width};
    animation: ${props => props.anim ? (`${bgAnimation} 2s ease-out`) : ('')};
    max-width: 100%; 
`;

export const Text = styled.div`
    font-family: ${props => props.fontfamily};
    float: ${props => props.float};
    width:${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding ? props.padding : '10px'};
    font-size: ${props => props.fontSize};
    margin:${props => props.margin ? props.margin : 'auto auto'};
    color: ${props => props.color};
    opacity: ${props => props.opacity}
    position: ${props => props.position};
    overflow: ${props => props.overflow};
    z-index:${props => props.zindex};
    text-align:${props => props.align};
    display: ${props => props.display};
    letter-spacing:${props => props.ltrspc};
    line-height:${props => props.lineheight};
    
    
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:focus,  &:visited, &:link, &:active {
        text-decoration: none;
    };
    &:hover{
        text-decoration: none;
        color: #666;
        }
`;

export const StyledAnchor = styled.a`
    text-decoration: none;
    color: ${props => props.color ? props.color : 'white'};
    &:focus,  &:visited, &:link, &:active {
        text-decoration: none;
    };
    &:hover{
        text-decoration: none;
        color: #666;
        }
`;


export const Container = styled.div`
    width: 100vw;
    position: relative;
    max-width: 100%;
`;

export const Arrow = styled.div`
    color: #fff;
    margin: ${props => props.margin};
    text-shadow: 1px 1px 1px #fff;
    z-index: 105;
    top: 0;
    width: 3%;
    position: absolute;
    font-size: 3em;
    cursor: pointer;
    user-select: none;
    opacity: 1;
    margin: ${props => props.margin};
    right: ${props => props.right}
    &:hover { opacity: 1;}
`;

export const Hexagon = styled(Element)`
    #hexagon {
      width: 100px;
      height: 55px;
      background: red;
      position: relative;
    }
    #hexagon:before {
      content: "";
      position: absolute;
      top: -25px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 25px solid red;
    }
    #hexagon:after {
      content: "";
      position: absolute;
      bottom: -25px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 25px solid red;
    }
`;





