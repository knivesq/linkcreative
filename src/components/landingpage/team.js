import React from 'react'
import {
    Block,
    DryElement,
    DryImage,
    DryText,
    DryTitle1,

} from '../../styled/blocks';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Media from "react-media";

const images = 'images/';

const teamdata = [
    {
        index: 0,
        title: 'André',
        text: 'Minhas Atribuições: Design Gráfico, Desenvolvimento Web, Marketing e Vendas. Meus Hobbies: "Games, Séries, Animes e Programação Web."',
        src:`${images}team/andre.png`,
        delay: 0

    },
    {
        index: 1,
        title: 'Sâmea',
        text: 'Minhas Atribuições: Gerenciamento de Estratégias em Marketing e Vendas. Aprimorando idéias na criação e na área Comercial. “Vindo de uma área convencional e se engajando em um mundo inovador, o digital”.',
        src:`${images}team/samea.png`,
        delay: 350

    },
    {
        index: 2,
        title: 'Diego',
        text: 'Minhas atribuições: Desenvolvimento de Marca e Identidade Visual, design gráfico e direção de arte.\n' +
              'Meus hobbies: ilustração, quadrinhos, filmes e séries, teatro e muitas outras coisas.',
        src:`${images}team/diego.png`,
        delay: 700

    },

];

const MiniTeam = ({...props}) => {
    return (
        <React.Fragment key={props.index}>
            <ScrollAnimation animateIn={"fadeInDown"} offset={100} delay={props.delay}>
                <Block width={'25vw'}>
                    <DryTitle1 align={'center'}>{props.title}</DryTitle1>
                    <DryElement >
                        <DryImage width={'100%'} src={props.src}/>
                    </DryElement>
                    <DryText align={'justify'} fontSize={'1.1rem'}>{props.text}</DryText>
                </Block>
            </ScrollAnimation>
        </React.Fragment>
    )
}

const TeamMobile = ({...props}) => {
    return (
        <React.Fragment key={props.index}>
            <ScrollAnimation animateIn={"fadeIn"} offset={100} delay={props.delay}>
                <Block trasition={props.transition} width={'90vw'}>
                    <DryTitle1 align={'center'}>{props.title}</DryTitle1>
                    <DryElement >
                        <DryImage width={'100%'} src={props.src}/>
                    </DryElement>
                    <DryText fontSize={'1.1rem'} align={'center'}>{props.text}</DryText>
                </Block>
            </ScrollAnimation>
        </React.Fragment>
    )
}

let teamlist = teamdata.map((props) => {
    return (
        <MiniTeam
            key={props.index}
            title={props.title}
            text={props.text}
            src={props.src}
            delay={props.delay}
        />
    )
})

let teamlistm = teamdata.map((props) => {
    return (
        <TeamMobile
            key={props.index}
            title={props.title}
            text={props.text}
            src={props.src}
            delay={props.delay}
        />
    )
})

class TimePc extends React.Component {
    render () {
        return (
            <Media query={{screen: true, minWidth: 991}} render={() =>
                <Block
                    display={'flex'}
                    items={'flex-start !important'} >
                    {teamlist}
                </Block>
            }/>
        )
    }
}

const TimeMobile = () => {
    return (
        <Media query={{screen: true, maxWidth: 991}} render={() =>
            <Block display={'flex'} direct={'column'}>
                {teamlistm}
            </Block>
        }/>
    )
}

export default class Team extends React.Component{
    render(){
        return(
            <React.Fragment>
                <TimePc/>
                <TimeMobile/>
            </React.Fragment>
        )
    }
}