import React from 'react'
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
    DryLink,
    DryArrow,
    DryContainer,
    DryHexagon
} from '../../styled/blocks';
import {faDesktop, faMobileAlt, faFingerprint, faCrop} from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from 'react-animate-on-scroll';
import Media from "react-media";
import "animate.css/animate.min.css";

// variables
let imgpath = 'images/servicos/';

let servicecontent = [
    {
        img: `${imgpath}slide-1.jpeg`,
        title: 'Desenvolvimento Web',
        text: 'Desenvolvemos sites em WordPress/ReactJS, adaptável a todos os dispositivos, seja PC, Notebook ou Mobile. Integramos seu espaço virtual as Redes Sociais para conectar seus clientes com maior rapidez.',
        index: 1,
        direct: 'row',
        leftside: true,
        icon: faDesktop,
        delay: 0
    },
    {
        img: `${imgpath}slide-2.jpeg`,
        title: 'Identidade Visual',
        text: 'Fazemos o design de sua Marca, ajudamos a escolher o nome, trabalhamos para seu logo ficar com seu perfil. Criamos modelos de catálogos, papelaria, uniformes e seu espaço digital.',
        index: 2,
        direct: 'row-reverse',
        leftside: false,
        icon: faFingerprint,
        delay: 300
    },
    {
        img: `${imgpath}slide-3.jpeg`,
        title: 'Marketing Digital',
        text: 'Fazemos estudos de campo do seu negócio, Analisamos minuciosamente cada detalhe, para criarmos estratégias e alavancar o seu resultado.',
        index: 3,
        direct: 'row',
        leftside: true,
        icon: faMobileAlt,
        delay: 600
    },
    {
        img: `${imgpath}slide-4.jpeg`,
        title: 'Design Gráfico',
        text: 'Elaboramos diversos tipos de conteúdos digitais, de panfletos a artes para redes sociais. estudamos seu perfil para criar algo completamente inovador que espelha seu estilo. ',
        index: 4,
        direct: 'row-reverse',
        leftside: false,
        icon: faCrop,
        delay: 900
    },
];

const Service = ({...props}) => {
    return (
        <ErrorBoundary>
            <ScrollAnimation animateIn={"fadeIn"} offset={100} delay={props.delay}>
                <Block display={'flex'} direct={'column'} width={'40vw'}>
                    <DryElement padding={'20px'} width={'10vw'}>
                        <DryIcon  size={'3x'} icon={props.icon}/>
                    </DryElement>

                    <DryElement align={'justify'} fontSize={'1rem'} padding={'10px'} width={'30vw'}>
                        <DryTitle3 align={'center'} padding={'0 10px'}>{props.title}</DryTitle3>
                        <DryText fontSize={'1rem'}>{props.text}</DryText>
                    </DryElement>
                </Block>
            </ScrollAnimation>
        </ErrorBoundary>
    )
};


let servicelist = servicecontent.map((props) => {
    return (
        <Service key={props.index}
                 title={props.title}
                 text={props.text}
                 icon={props.icon}
                 delay={props.delay}
        />

    )

});


const ServiceMobile = ({...props}) => {
    return (
        <ErrorBoundary>
            <ScrollAnimation animateIn={"fadeIn"} offset={100} delay={300}>
                <Block  display={'flex'} direct={'column'} width={'90vw'}>
                    <DryElement padding={'20px'}>
                        <DryIcon size={'3x'} icon={props.icon}/>
                    </DryElement>

                    <DryElement align={'justify'} fontSize={'1rem'} padding={'10px'} >
                        <DryTitle3 padding={'0 10px'}>{props.title}</DryTitle3>
                        <DryText fontSize={'1rem'}>{props.text}</DryText>
                    </DryElement>
                </Block>
            </ScrollAnimation>
        </ErrorBoundary>
    )
};

let servicelistm = servicecontent.map((props) => {
    return (
        <ServiceMobile key={props.index}
                 title={props.title}
                 text={props.text}
                 icon={props.icon}
                 delay={props.delay}
        />

    )

});


const ServicoPc = ({...props}) => {
    return (
        <Media query={{screen: true, minWidth: 992}} render={() =>
            <Block
                   hovercolor={'black'}
                   display={'flex'}
                   items={'flex-start'}
                   wrap={'wrap'}>
                {servicelist}
            </Block>
        }/>
    )
}

const ServicoMobile = () => {
    return (
        <Media query={{screen: true, maxWidth: 991}} render={() =>
            <Block display={'flex'} direct={'column'}>
                {servicelistm}
            </Block>
        }/>
    )
}


export default class Servico extends React.Component {
    render(){
        return (
            <React.Fragment>
               <ServicoPc/>
                <ServicoMobile/>
            </React.Fragment>
        )
    }
}
