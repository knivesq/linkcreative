import React from 'react'
import {faChevronCircleUp} from '@fortawesome/free-solid-svg-icons'
import { Link, Events, scrollSpy} from 'react-scroll'
import {
    Block,
    DryIcon,
} from '../../styled/blocks';
import "animate.css/animate.min.css";

export default class BackToTop extends React.Component{
    constructor(){
        super();
        this.state = {
            visible: false
        }
        this.handleSetActive = this.handleSetActive.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }


    handleSetActive(to) {
        console.log(to);
    }

    handleScroll(){
        let Y = window.pageYOffset;
        if(Y >= 600){
            this.setState({
                visible: true
            })
        } else {
            this.setState({
                visible: false
            })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
          return (

                <Block
                    opacity={this.state.visible ? '1':'0'}
                    transition={'opacity .5s ease, visibility .5s ease'}
                    position={'fixed'}
                    zindex={'10000'}
                    bgcolor={'#FFC300  '}
                    width={'100vw'}
                    height={'10vh'}
                    padding={'0'}
                    visibility={this.state.visible ? 'visible':'hidden'}
                    display={'flex'}
                    content={'center'}>
                    <Link activeClass="active" to={'navbar'} spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} >
                        <Block width={'90vw'} display={'flex'}>
                        <DryIcon size={'2x'} icon={faChevronCircleUp} />
                        </Block>
                    </Link>
                </Block>
        )
    }
}

