import styled,  {keyframes, css, ThemeProvider} from "styled-components";
import {
    Element,
    Paralelo,
    StyledImageButBg,
    TeamBlock,
    Text,
    StyledLink,
    Arrow,
    Container,
    Hexagon,
    StyledAnchor
} from "./elements";
import {StyledIcon} from "./fontawesome";
import {StyledImage} from "./images";
import {ListWrap, ListItem} from "./lists";
import {Title1, Title2, Title3, Title4, Title5, Title6, TitleWrap} from "./titles";
import injectGlobal from 'styled-components'
import SegoeWPNeot from '../utils/fonts/SegoeWPN.eot'
import SegoeWPNotf from '../utils/fonts/SegoeWPN.otf'
import SegoeWPNsvg from '../utils/fonts/SegoeWPN.svg'
import SegoeWPNttf from '../utils/fonts/SegoeWPN.ttf'
import SegoeWPNwoff from '../utils/fonts/SegoeWPN.woff'
import SegoeWPNwoff2 from '../utils/fonts/SegoeWPN.woff2'





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

// fonts families
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

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



export const Block = styled.div.attrs({
    display: props => props.display || 'block',
    padding: props => props.padding || '20px',
    fontSize: props => props.fontSize || '1.3rem',
    fontFamily: props => props.fontFamily || SegoeWPN,
    content: props => props.content || 'center',
    item: props => props.items || 'center',
    direct: props => props.direct || 'row',
    maxwidth: props => props.maxwidth || '100%'
})`
    display: ${props => props.display};
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily} !important;
    justify-content: ${props => props.content};
    align-items: ${props => props.item};
    width: ${props => props.width};
    height: ${props => props.height};
    flex-direction: ${props => props.direct};
    float: ${props => props.float};
    top:${props => props.top};
    position:${props => props.position};
    margin:${props => props.margin};
    background-color: ${props => props.bgcolor};
    max-width: ${props => props.maxwidth};
    color: ${props => props.color};
    animation: ${props => props.anim ? (`${bgAnimation} 2s ease-out`) : ('')};
    z-index:${props => props.zindex};
    box-shadow: ${props => props.shadow};
    top: ${props => props.top};
    transition: ${props => props.transition};
    flex-wrap: ${props => props.wrap};
    opacity: ${props => props.opacity};
    visibility: ${props => props.visibility};
    
    @media only screen and (max-width: 320px) {
        max-width: 320px;
        overflow:hidden;
    }
        
   
`;

// elements
export const DryElement = Element;
export const DryHexagon = Hexagon;
export const DryParalelo = Paralelo;
export const DryBackground = StyledImageButBg;
export const DryTeam = TeamBlock;
export const DryArrow = Arrow;
export const DryContainer = Container;
export const DryAnchor = StyledAnchor;




// fontawesome
export const DryIcon = StyledIcon;


// images
export const DryImage = StyledImage;


// lists
export const DryUl = ListWrap;
export const DryLi = ListItem;


// texts
export const DryText = Text;


// titles
export const DryTitle1 = Title1;
export const DryTitle2 = Title2;
export const DryTitle3 = Title3;
export const DryTitle4 = Title4;
export const DryTitle5 = Title5;
export const DryTitle6 = Title6;

// link
export const DryLink = StyledLink;