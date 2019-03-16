import React from 'react'
import {
    Block,
    DryElement,
    DryIcon,
    DryTitle1,
    DryTitle4,
    DryAnchor
} from '../../styled/blocks';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Media from "react-media";

let title = 'Entre em contato'
let text = [
    'contato@linkcreativestudio.com.br',
    '+55 24 9 88765650',
    'Facebook',
    'Instagram',

];
const contactdata = [
    {
        index: 0,
        delay: 400,
        href: "mailto:contato@linkcreativestudio.com.br?Subject=Contato%20Link",
        icon: faEnvelope,
        text: "Enviar e-mail"
    },
    {
        index: 1,
        delay: 400,
        href: "https://wa.me/5524988765650?text=Gostaria%20de%20obter%20informações%20",
        icon: faWhatsapp,
        text: "+55 24 9 88765650"
    },
    {
        index: 2,
        delay: 400,
        href: "https://www.facebook.com/linkcria",
        icon: faFacebook,
        text: "Facebook"
    },
    {
        index: 3,
        delay: 400,
        href: "https://www.instagram.com/linkcria/",
        icon: faInstagram,
        text: "Instagram"
    },

];

const Contact = ({...props}) => {
    return (
        <React.Fragment key={props.index}>
            <ScrollAnimation animateIn={"fadeIn"} offset={100} delay={props.delay}>
                <DryAnchor href={props.href}>
                    <DryElement
                        padding={'10px 0'}
                        width={'70vw'}
                        display={'flex'}
                        content={'space-between'}>
                        <DryIcon size={'3x'} icon={props.icon}/>
                        <DryTitle1>{props.text}</DryTitle1>
                    </DryElement>
                </DryAnchor>
            </ScrollAnimation>
        </React.Fragment>
    )
}


let contactlist = contactdata.map((props) => {
    return (
        <Contact
            key={props.index}
            delay={props.delay}
            href={props.href}
            icon={props.icon}
            text={props.text}
            color={props.color}
        />
    )
});


const ContactM = ({...props}) => {
    return (
        <React.Fragment key={props.index}>
            <ScrollAnimation animateIn={"fadeIn"} offset={20} delay={props.delay}>
                <DryAnchor href={props.href}>
                    <Block
                        padding={'20px'}
                        width={'90vw'}
                        display={'flex'}
                        direct={'column'}
                        color={'white'}
                    >
                            <DryIcon size={'2x'} icon={props.icon}/>
                            <DryTitle4 padding={'20px'}>{props.text}</DryTitle4>
                    </Block>
                </DryAnchor>
            </ScrollAnimation>
        </React.Fragment>
    )
}


let contactlistm = contactdata.map((props) => {
    return (
        <ContactM
            key={props.index}
            delay={props.delay}
            href={props.href}
            icon={props.icon}
            text={props.text}
        />
    )
});



class ContatoPc extends React.Component{
    render(){
        return (
            <Media query={{screen: true, minWidth: 992}} render={() =>
                <Block
                    height={'100vh'}
                    display={'flex'}
                    direct={'column'}
                >
                    <DryElement display={'flex'} direct={'column'}>
                        <ScrollAnimation animateIn={"fadeIn"} offset={100}>
                            <DryElement padding={'30px 10px'} >
                                <DryTitle1 fontSize={'4rem'} >{title}</DryTitle1>
                            </DryElement>
                        </ScrollAnimation>

                        <DryElement display={'flex'} direct={'column'}>
                            {contactlist}
                        </DryElement>
                    </DryElement>
                </Block>

            }/> )
    }
}

const ContatoMobile = () => {
    return (
        <Media query={{screen: true, maxWidth: 991}} render={() =>
            <Block
                    display={'flex'}
                    direct={'column'}
                    padding={'0'}
            >
                <DryElement display={'flex'} direct={'column'}>
                    <DryElement>
                        <ScrollAnimation animateIn={"fadeIn"} offset={100}>
                            <DryTitle1  padding={'20px 10px'} align={'center'}>{title}</DryTitle1>
                        </ScrollAnimation>
                    </DryElement>

                    <DryElement display={'flex'} direct={'column'}  item={'center'} >
                        {contactlistm}
                    </DryElement>


                </DryElement>
            </Block>

        }/>
    )
}



export default class Contato extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ContatoPc/>
                <ContatoMobile/>
            </React.Fragment>
        )
    }
}