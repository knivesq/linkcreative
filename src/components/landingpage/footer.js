import React from 'react'
import {
    Block,
    DryElement,
} from '../../styled/blocks';
import "animate.css/animate.min.css";

export const Footer = ({...props}) => {
    return (
        <React.Fragment>
                <Block width={props.width} bgcolor={props.bgcolor} color={props.color}
                       padding={'10px'} content={'space-evenly'} display={'flex'}>
                    <DryElement fontSize={'1.2rem'}>
                        ®2018 Todos os direitos reservados | Desenvolvido por Link Creative
                    </DryElement>
                </Block>
        </React.Fragment>
    )
}