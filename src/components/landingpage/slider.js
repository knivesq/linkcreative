import React from 'react'
import {
    Block,
    DryElement,
    DryImage,
    DryIcon,
    DryText,
    DryTitle2,
    DryTitle3,
    DryLi,
    DryUl
} from '../../styled/blocks';
import ErrorBoundary from "../../utils/errors";
import { faChevronCircleLeft, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";
import Carousel from 'nuka-carousel'
import Media from "react-media";
import "animate.css/animate.min.css";


let imgpath = 'images/servicos/';

let landcontent = [
    {
        img: `${imgpath}slide-6.jpg`,
        title: 'Design Gráfico',
        text: 'Produzimos os mais diversos tipos de conteúdos digitais para você, fazemos ' +
            'banners, panfletos, cartões de visitas, convites animados e muito mais!',
        index: 1,
        direct: 'column',
        transform: 0,

    },
    {
        img: `${imgpath}slide-3.jpg`,
        title: 'Marketing Digital',
        text: 'Fazemos o gerenciamento de sua rede social, postamos suas fotos, respondemos seus comentários, ' +
            'analisamos seus resultados e trabalhamos de forma que você consiga focar na gestão do seu negócio.',
        index: 3,
        direct: 'row',
        transform: 120,
    },

    {
        img: `${imgpath}slide-1.jpg`,
        title: 'Desenvolvimento Web',
        text: 'Mantenha-se antenado nas mais modernas soluções em websites, divulgue seu projeto com sua página na web. Criamos seu site adaptável a todas as plataformas. ' +
            'Integramos seu espaço digital às mais diversas redes sociais.',
        index: 6,
        direct: 'row-reverse',
        transform: 240,
    },

];


let listslides = landcontent.map((props) => {
    return (
        <React.Fragment key={props.index}>

            <DryElement  padding={'3.1rem 7.5rem 0 7.5rem'} width={'85vw'} overflow={'hidden'} height={'60vh'}>
                <DryImage width={'100%'}
                          src={props.img}
                />
            </DryElement>

            <DryElement color={'white'} padding={'0 6.8rem'} height={'40vh'}>
                <DryTitle2 padding={'1.25rem 0.6rem'} >{props.title}</DryTitle2>
                <DryText >{props.text}</DryText>
            </DryElement>

        </React.Fragment>
    )
});



let timer, radius, theta;
let index = 0


class MyCarousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            cells: 3,
            flipped: false,
            angle: 0,
            cellSize: window.innerWidth,
            tz:0,
            timer: true
        }

        this.rotateCarousel = this.rotateCarousel.bind(this)
        this.nextButton = this.nextButton.bind(this)
        this.prevButton = this.prevButton.bind(this)



    }


    rotateCarousel(index){
        let cellCount = this.state.cells
        let angle = index / cellCount * -360
        this.setState({
            angle: angle,
            index: index,
        })
    }

    countDown(){
        let tempo = 10000
        timer = setInterval(() => {
            index++
            this.rotateCarousel(index)
        }, tempo)

    }

    nextButton(){
        index ++
        this.rotateCarousel(index)
    }

    prevButton(){
        index --
        this.rotateCarousel(index)

    }


    componentDidMount(){
        this.countDown()
        console.log(window.innerWidth)
        let cellSize = this.state.cellSize
        let numberOfCells = this.state.cells
       let tz =  Math.round( ( cellSize / 2 ) /
            Math.tan( ( ( Math.PI * 2 ) / numberOfCells ) / 2 ) );
        this.setState({
            tz: tz
        }, () => {
            console.log(tz)
        }, () => {
            console.log(this.state.tz)
        })

    }


    render(){

        let state = this.state
        let listslidesm = landcontent.map((props) => {
            return (
                <DryElement backvisibility={'hidden'}
                            transform={`rotateY(${props.transform}deg) translateZ(${state.tz}px)`}
                            display={'block'}
                            position={'absolute'}
                            width={'100vw'}
                            height={'100vh'}
                            key={props.index}>


                        <DryElement padding={'0'} width={'100vw'} overflow={'hidden'} height={'38vh'}>
                            <DryImage width={'100%'}
                                      src={props.img}
                            />
                        </DryElement>

                        <DryElement display={'flex'} content={'flex-start'} direct={'column'} align={'justify'} width={'100vw'} padding={'0 1rem'} height={'50vh'}>
                            <DryTitle3 margin={'10px 0 35px 0'} padding={'0.2rem 0.6rem'} >{props.title}</DryTitle3>
                            <DryText margin={'0'} fontSize={'1.2rem'} >{props.text}</DryText>
                        </DryElement>
                </DryElement>
            )
        });
        return(
            <DryElement display={'flex'} content={'center'} direct={'column'}>

                <DryElement zindex={'1002'} position={'absolute'} display={'flex'} content={'space-between'} width={'100vw'}>
                    <DryElement onClick={this.prevButton} ><DryIcon icon={faChevronCircleLeft}/></DryElement>
                    <DryElement onClick={this.nextButton} ><DryIcon icon={faChevronCircleRight}/></DryElement>
                </DryElement>

                    <DryElement
                        overflow={'hidden'}
                        color={'white'}
                        width={`${state.cellSize}px`}
                        height={'90vh'}
                        perspective={'1000px'}
                        position={'relative'}>
                        <DryElement
                            transform={state.angle !== 0 ? `translateZ(-${state.tz}px) rotateY(${state.angle}deg)` : `translateZ(-${state.tz}px)`}
                            transition={'transform 1s'}
                            width={'100%'}
                            height={'100%'}
                            position={'absolute'}
                            transstyle={'preserve-3d'}>
                            {listslidesm}
                        </DryElement>
                    </DryElement>
            </DryElement>
        )
    }
}

class LandingPc extends React.Component{
    render(){
        return (
            <ErrorBoundary>

                <Media query={{screen: true, minWidth: 992}} render={() =>

                    <Block
                        content={'flex-start'}
                        padding={'0'}>
                        <DryElement content={'flex-start'} display={'flex'} radius={'0px'}
                                    width={'85.2vw'} overflow={'hidden'} direct={'column'}>
                            <Carousel
                                renderCenterLeftControls={({ previousSlide }) => (
                                    <DryIcon  size={'2x'} color={'rgba(100,100,100,0.7)'} icon={faChevronCircleLeft} onClick={previousSlide}/>
                                )}
                                renderCenterRightControls={({ nextSlide  }) => (
                                    <DryIcon size={'2x'} color={'rgba(100,100,100,0.7)'} icon={faChevronCircleRight} onClick={nextSlide}/>
                                )}
                                pauseOnHover={false}
                                autoplay={true} autoplayInterval={7000} wrapAround={true}>
                                {listslides}
                            </Carousel>
                        </DryElement>
                    </Block>
                } />
            </ErrorBoundary>
        )
    }

};

const LandingMobile = () => {
    return (
        <ErrorBoundary>
            <Media query={{screen: true, maxWidth: 991}} render={() =>

                <Block content={'flex-start'} padding={'0'}>
                 <MyCarousel/>
                </Block>
            } />
        </ErrorBoundary>
    )
};

export const Slider = () => {
    return (
        <React.Fragment>
            <LandingMobile/>
            <LandingPc/>
        </React.Fragment>
    )
}