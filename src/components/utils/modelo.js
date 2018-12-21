import React from 'react'
import {Block, DryElement, DryBackground, DryLi, DryParalelo, DryTeam, DryUl, DryImage, DryIcon} from '../styled/blocks';

export default class Modelo extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}