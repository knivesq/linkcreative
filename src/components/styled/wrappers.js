import styled, {keyframes} from 'styled-components'
import React from 'react'

// local dos reusable src para usar a na vida de react


// minhas variaveis

// bg
const myImagesUrl = 'http://localhost/linkstudio/public/images/';
const newFolder = 'new/';
const myImagesUrlFolder = 'whatwedo/';
const imagesUrlFolder = '';
const wrapperBg = urlText => (`url("${myImagesUrl}${newFolder}${urlText}")`);
const imageBg = urlText => (`url("${myImagesUrl}${myImagesUrlFolder}${urlText}")`);
// fonts families
const HelveticaFamily = 'Helvetica, Arial, sans-serif';

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
// wrappers

// sem bg
export const Wrapper = styled.div.attrs({
    display: props => props.display || 'flex',
    padding: props => props.padding || '20px',
    fontSize: props => props.fontSize || '1.3rem',
    fontFamily: props => props.fontFamily || HelveticaFamily,
    content: props => props.content ||'center',
    item: props => props.item ||'center',


})`
    display: ${props => props.display};
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    justify-content: ${props => props.content};
    align-items: ${props => props.item};
    width: ${props => props.width};
    height: ${props => props.height};
    
`;


// com bg

export const WrapperWithBg = styled(Wrapper).attrs({
    background: props => wrapperBg(props.background),
    backgroundsize: props => props.backgroundsize || '100% 100%'
})`
    background: ${props => props.background ? props.background : ''};
    background-size: ${props => props.backgroundsize};
    background-color: ${props => props.bgcolor};
	animation: ${props => props.anim ? (`${bgAnimation} 2s ease-out`) : ('')};
	max-width: 100%
    
`;

