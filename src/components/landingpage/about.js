import React from 'react'
import {
    Block,
    DryElement,
    DryImage,
    DryTitle1,
} from '../../styled/blocks';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Media from "react-media";


const text = [
    'A link é uma empresa de design gráfico, marketing digital e desenvolvimento web. ',
    'Criada com o objetivo de inovar, adaptar e superar nesse novo mundo tecnológico,',
    ' fazemos o máximo para alcançar os melhores resultados com rapidez e praticidade.',
    ' Nosso trabalho é focado em gerar uma conexão digital com os interesses dos nossos ',
    'clientes, facilitando seu trabalho e envolvendo-o neste ambiente diferente.',
    ' Estamos em constante mutação, nos adaptando aos diversos tipos de cenários e situações aprendendo cada vez mais.'
];

class LaptopPc extends React.Component {
    render(){
        return (
            <Media query={{screen: true, minWidth: 992}} render={() =>
                <Block
                    display={'flex'}
                    items={'flex-start'} content={'flex-start'}>
                    <Block
                        height={'100vh'}
                        padding={'0 0 0 80px'}
                        display={'flex'}
                        overflow={'hidden'}
                    >
                        <DryElement align={'justify'} padding={'2.1vw'} width={'35vw'} fontSize={'1.1rem'} height={'70vh'}>
                            <ScrollAnimation animateIn={"fadeIn"} offset={100} >
                                <DryElement>
                                    <DryTitle1>Sobre Nós</DryTitle1>
                                </DryElement>
                                <DryElement>
                                    {text[0]}
                                    <span>
                                        {text[1]}
                                        {text[2]}
                                    </span>
                                    <span>
                                        {text[3]}
                                        {text[4]}
                                    </span>
                                    <span>
                                        {text[5]}
                                    </span>
                                </DryElement>
                            </ScrollAnimation>
                        </DryElement>
                        <ScrollAnimation animateIn={"fadeIn"} offset={100}>
                            <DryElement width={'35vw'}>
                                <DryImage width={'100%'} src={'images/servicos/slide-9.png'}/>
                            </DryElement>
                        </ScrollAnimation>
                    </Block>
                </Block>
            }/>
        )
    }


}


class AboutM extends React.Component{

        render() {
            return (
                <Media query={{screen: true, maxWidth: 991}} render={() =>
                    <Block display={'flex'} items={'center'} content={'center'}>
                        <Block
                            display={'flex'}
                            direct={'column-reverse'}
                            overflow={'hidden'}
                            width={'100vw'}

                        >
                            <DryElement align={'justify'} padding={'2.1vw'} width={'90vw'} fontSize={'1.1rem'}>
                                <ScrollAnimation animateIn={"fadeIn"}>
                                    <DryElement>
                                    </DryElement>
                                    <DryElement>
                                        {text[0]}
                                        <span>
                                            {text[1]}
                                            {text[2]}
                                            </span>
                                        <span>
                                            {text[3]}
                                            {text[4]}
                                            </span>
                                        <span>
                                            {text[5]}
                                            </span>
                                    </DryElement>
                                </ScrollAnimation>
                            </DryElement>
                            <ScrollAnimation animateIn={"fadeIn"}>
                                <DryElement width={'90vw'}>
                                    <DryImage width={'100%'} src={'images/servicos/slide-9.png'}/>
                                </DryElement>
                            </ScrollAnimation>
                        </Block>
                    </Block>
                }/>

            )

        }

}

export const About = () => {
    return (
        <React.Fragment>
            <LaptopPc/>
            <AboutM/>
        </React.Fragment>
    )
}