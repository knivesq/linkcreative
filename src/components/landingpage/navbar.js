import React from "react";
import ErrorBoundary from "../../utils/errors";
import {
    Block,
    DryElement,
    DryBackground,
    DryLi,
    DryParalelo,
    DryTeam,
    DryUl,
    DryImage,
    DryIcon,
    DryText,
    DryTitle1,
    DryTitle2,
    DryTitle3,
    DryTitle4,
    DryTitle5,
    DryTitle6,
    DryLink
} from "../../styled/blocks";
import { StickyContainer, Sticky } from 'react-sticky'
import { Link, Element  as ScrollElement, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Media from 'react-media'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";

const navbarcontent = [
    {text: 'Sobre', to: 'laptop', index: 1, offset:0},
    {text: 'Time', to: 'time', index: 2, offset:40},
    {text: 'Serviços', to: 'service', index: 3, offset:50},
    {text: 'Contato', to: 'contato', index: 4, offset: 50}
];


const Nav = ({...props}) => {
    return (
        <ErrorBoundary>
                <DryUl  fontSize={'1.4rem'} liststyle={'none'} >
                    <DryLi color={props.color} cursor={'pointer'} ><Link spy={true} offset={props.offset}  smooth={true} duration={500} to={props.to}>{props.text}</Link></DryLi>
                </DryUl>
        </ErrorBoundary>
    )
}
let list = navbarcontent.map((props) => {
    return (
        <Nav
            key={props.index}
            text={props.text}
            to={props.to}
            offset={props.offset}
        />
    )
});



const Menu2 = ({...props}) => {
    return (
        <ErrorBoundary>
            <Block top={'0'}
                   width={props.bwidth}
                   padding={props.padding}
                   display={'flex'}
                   direct={props.direct}
                   bgcolor={props.bgcolor}
                   position={props.position}
                   content={'center'}
                   items={'center'}
                   height={'100vh'}
                   color={props.color}
                   transition={props.transition}
            >
                <DryElement cursor={'pointer'} width={props.lwidth} >
                    <Link spy={true} smooth={true} offset={-50} duration={500} to={props.to}>
                        <DryImage src={props.src}/>
                    </Link>
                </DryElement>

                <Block display={'flex'} width={props.width}
                       direct={props.bdirect}
                       content={'flex-start'}
                       items={'flex-start'}>
                    {list}
                </Block>
            </Block>
        </ErrorBoundary>
    )
};

let Timer;

class MobileNavbar extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            timer: 1,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.state.visible ? (
            this.setState({
                visible: false
            }),
                clearTimeout(Timer)
        ) : (
            this.setState({
                visible: true
            }),
                Timer = setTimeout(
                    () => (this.setState({visible: false})), 6000)

        )
    }

    componentWillUnmount(){
        clearTimeout(Timer);
    }

    render() {
        return (
            <Media query={{screen: true, maxWidth: 991}} render={() =>
                <DryElement padding={'20px'} width={'90vw'} display={'flex'} content={'space-between'}>
                    <DryElement cursor={'pointer'} width={'15vw'} >
                        <Link spy={true} smooth={true} offset={-50} duration={500} to={'landing'}><DryImage src={'images/logo/Link-Creative-logo.png'}/></Link>
                    </DryElement>
                    <DryElement
                        float={'right'}
                        color={'white'}
                        display={'block'}><DryIcon onClick={this.handleClick} size={'2x'} icon={faBars}/>
                    </DryElement>
                    <DryElement
                            margin={'85px 0 0 25px'}
                            zindex={' 99 !important'}
                            width={'80vw'}
                            color={'black'}
                            bgcolor={'white'}
                            mheight={this.state.visible ? '400px' : '0'}
                            overflow={'hidden'}
                            shadow={'0px 8px 16px 0px rba(100, 100, 100, 0.7);'}
                            transition={'max-height 0.5s linear'}
                            position={'absolute'}
                            top={'0'}
                            visible={this.state.visible}>
                        <DryUl>
                            <Link spy={true} smooth={true} offset={50} duration={500} to={'laptop'}><DryLi onClick={this.handleClick} padding={'0 20px'}>Sobre</DryLi></Link>
                            <hr/>
                            <Link spy={true} smooth={true} offset={50} duration={500} to={'time'}><DryLi onClick={this.handleClick} padding={'0 20px'}>Time</DryLi></Link>
                            <hr/>
                            <Link spy={true} smooth={true} offset={50} duration={500} to={'service'}><DryLi onClick={this.handleClick} padding={'0 20px'}>Serviços</DryLi></Link>
                            <hr/>
                            <Link spy={true} smooth={true} offset={0} duration={500} to={'contato'}><DryLi onClick={this.handleClick} padding={'0 20px'}>Contato</DryLi></Link>
                        </DryUl>
                    </DryElement>
                </DryElement>
            }/>
        )
    }
}

const PcNavbar = ({...props}) => {
    return (
        <Media query={{screen: true, minWidth: 992}}
               render={() => {
                   return (
                       <Menu2
                           padding={props.padding}
                           bgcolor={props.bgcolor}
                           position={props.position}
                           lwidth={props.lwidth}
                           bwidth={props.bwidth}
                           direct={props.direct}
                           bdirect={props.bdirect}
                           color={props.color}
                           transition={props.transition}
                           to={'landing'}

                           src={props.src}
                       />
                   )
               }}
        />
    )
}


export default class Navbar extends React.Component {
    render() {

    return (
        <React.Fragment>
            <MobileNavbar/>
            <PcNavbar
                padding={this.props.padding}
                bgcolor={this.props.bgcolor}
                position={this.props.position}
                lwidth={this.props.lwidth}
                bwidth={this.props.bwidth}
                direct={this.props.direct}
                bdirect={this.props.bdirect}
                color={this.props.color}
                transition={this.props.transition}
                src={this.props.src}
            />
        </React.Fragment>


    )

    }
}