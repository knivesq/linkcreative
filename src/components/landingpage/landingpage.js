import React from 'react'
import {
    Block,
    DryElement,
} from '../../styled/blocks';
import ErrorBoundary from "../../utils/errors";
import Navbar from "./navbar";
import {Footer} from "./footer";
import Service from "./service";
import {About} from "./about"
import Team from './team'
import Contato from "./contato";
import {  Element  as ScrollElement,  animateScroll as scroll } from 'react-scroll'
import {Slider} from './slider'
import Media from "react-media";
import BackToTop from "./backtotop";
import "animate.css/animate.min.css";


const images = [
    'images/logo/Link-Creative-logo.png',
    'images/logo/Link_Creative_logo-black.png'
]


class LandPc extends React.Component {
    render(){
        return (
            <ErrorBoundary>
                <Media query={{screen: true, minWidth: 992}} render={() =>
                    <React.Fragment>
                        <Block
                            transition={'background-color 1s linear, color 1s linear'}
                            color={'white'}
                            bgcolor={'black'}
                            display={'flex'}
                            content={'flex-start'}
                            items={'flex-start'}
                            padding={'0'}>
                            <Navbar
                                bdirect={'column'}
                                direct={'column'}
                                position={'sticky'}
                                bwidth={'15vw'}
                                padding={'5vw 2vh 2vh 2vh'}
                                lwidth={'10vw'}
                                src={`${images[1]}`}
                               />
                            <DryElement>
                                <ScrollElement  name={'landing'}><Slider/></ScrollElement>
                                <ScrollElement  name={'laptop'}><About/></ScrollElement>
                                <ScrollElement name={'time'}><Team /></ScrollElement>
                                <ScrollElement name={'service'}><Service /></ScrollElement>
                                <ScrollElement name={'contato'}><Contato /></ScrollElement>
                            </DryElement>
                        </Block>
                        <Footer
                            transition={'background-color 1s linear, color 1s linear'}
                            color={'white'}
                            bgcolor={'black'}
                        />
                    </React.Fragment>
                } />
            </ErrorBoundary>
        )
    };
}


class LandMobile extends React.Component{
    render() {
        return (
            <ErrorBoundary>
                <Media query={{screen: true, maxWidth: 991}} render={() =>
                    <React.Fragment>
                        <Block
                            transition={'background-color 1s linear, color 1s linear'}
                            color={'white'}
                            bgcolor={'black'}
                            display={'flex'}
                            direct={'column'}
                            content={'flex-start'}
                            items={'flex-start'}
                            padding={'0'}>
                            <ScrollElement name={'navbar'}>
                                <Navbar
                                    bdirect={'column'}
                                    direct={'column'}
                                    position={'sticky'}
                                    bwidth={'15vw'}
                                    padding={'8vw 2vh 2vh 2vh'}
                                    lwidth={'5vw'}
                                    bgcolor={'black'}/></ScrollElement>
                            <BackToTop position={'absolute'}/>
                            <DryElement>
                                <ScrollElement  name={'landing'}><Slider/></ScrollElement>
                                <ScrollElement  name={'laptop'}><About/></ScrollElement>
                                <ScrollElement name={'time'}><Team /></ScrollElement>
                                <ScrollElement name={'service'}><Service /></ScrollElement>
                                <ScrollElement name={'contato'}><Contato /></ScrollElement>
                            </DryElement>
                        </Block>
                        <Footer/>
                    </React.Fragment>
                } />
            </ErrorBoundary>
        )
    }
};


export default class LandingPage extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <React.Fragment>
                <LandPc/>
                <LandMobile/>
            </React.Fragment>
        )
    }
}