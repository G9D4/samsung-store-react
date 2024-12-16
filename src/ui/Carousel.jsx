
import styled from "styled-components";

const items=[
    {id:'fa@123', src:"https://shop.samsung.com/latin/pub/media/main-slider/2024-oct/2024-10-14-Launch-Banner-desktop-home-pa_v3.jpg"},
    {id:'3$21fd',src:"https://shop.samsung.com/latin/pub/media/main-slider/2024-nov/2024-11-1Samsung-Days_Multi-Banner-home-desktop_pa.jpg"},
    {id:'2&311d',src:"https://shop.samsung.com/latin/pub/media/main-slider/2024-sep/2024-09-02-EstaEsLaTele-Banner-Desktop.jpg"},
 ]

const StyleCarousel = styled.section`
    overflow: hidden;
`
const StyleCarouselWrapper = styled.div`
    display: flex;
    position: relative;
    top: 0;
    right: 0;
    animation: slideh1 16s infinite;
     &:hover{
        animation-play-state: paused;
    }
    @keyframes slideh1 {
        0% { right: 0; }
        33% { right: 100%;}
        66% { right: 200%;}
        100% { right: 0;}
    }
`
const StyleCarouselSlide= styled.img`
    width: 100%;
    flex-shrink: 0;
    justify-content: center;
`

function Carousel(){
    return(
        <StyleCarousel>
            <StyleCarouselWrapper>
               {
                items.map(item=>
                    <StyleCarouselSlide key={item.id} src={item.src} />
                )
               }
            </StyleCarouselWrapper>
        </StyleCarousel>
    )
}

export default Carousel;