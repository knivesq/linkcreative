import React from 'react'
import ErrorBoundary from "../utils/errors";
import {Wrapper, WrapperWithBg} from './wrappers'
import {Element, Paralelo, TeamBlock} from "./elements";
import {Block} from "./blocks";
import {StyledImage} from "./images";
import {StyledIcon} from "./fontawesome";


export const DryWrapper = ({...props}) => {
    return (
        <ErrorBoundary>
            <WrapperWithBg {...props}>
                {props.children}
            </WrapperWithBg>
        </ErrorBoundary>
    )
};

export const DryBlock = ({...props}) => {
    return(
        <ErrorBoundary>
            <Block {...props}>
                {props.children}
            </Block>
        </ErrorBoundary>
    )
}

export const TestContainer = ({...props}) => {
    return (
        <ErrorBoundary>
            <Block {...props} >
                {props.children}
            </Block>
        </ErrorBoundary>
    )
}

export const DryElement = ({...props}) => {
    return (
        <ErrorBoundary>
            <Element {...props}>
                {props.children}
            </Element>
        </ErrorBoundary>
    )
}


export const DryParalelo = ({...props}) => {
    return (
        <ErrorBoundary>
            <Paralelo {...props}>
                {props.children}
            </Paralelo>
        </ErrorBoundary>
    )
};


export const DryWrapperFlex = ({...props}) => {
    return (
        <ErrorBoundary>
            <WrapperFlex {...props}>
                {props.children}
            </WrapperFlex>
        </ErrorBoundary>
    )
};


export const DryImg = ({...props}) => {
    return (
        <ErrorBoundary>
            <StyledImage {...props}>
                {props.children}
            </StyledImage>
        </ErrorBoundary>
    )
};

export const DryTeamBlock = ({...props}) => {
    return (
        <ErrorBoundary>
            <TeamBlock {...props}>
                {props.children}
            </TeamBlock>
        </ErrorBoundary>
    )
}

export const DryIcon = ({...props}) => {
    return (
        <ErrorBoundary>
            <StyledIcon {...props}>
                {props.children}
            </StyledIcon>
        </ErrorBoundary>
    )
};


export const DryTitle = ({...props}) => {
    return (
        <ErrorBoundary>

        </ErrorBoundary>
    )
}

