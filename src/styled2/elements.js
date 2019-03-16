import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";



// fonts families
const HelveticaFamily = 'Helvetica, Arial, sans-serif';

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


export const Element = styled.div.attrs({
    display: props => props.display || 'block',
    content: props => props.content ||'center',
    item: props => props.items ||'center',
    direct: props => props.direct || 'row',
    maxwidth: props => props.maxwidth || '100%',
    radius: props => props.radius || '25px',


})`
    background-color: ${props => props.bgcolor};
    width:${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
    margin:${props => props.margin};
    padding: ${props => props.padding};
    float: ${props => props.float};
    display: ${props => props.display};
    z-index:${props => props.zindex};
    justify-content: ${props => props.content};
    align-items: ${props => props.item};
    flex-direction: ${props => props.direct};
    position: ${props => props.position};
    border: ${props => props.border}
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
   @media only screen and (max-width: 320px) {
        max-width: 320px;
        overflow:hidden;
    }
    
    

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

export const Text = styled.div.attrs({
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
    color: white;
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





