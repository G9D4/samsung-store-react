import '../../styles/styles.css';

const items=[
    {id:'fa@123', src:"https://shop.samsung.com/latin/pub/media/main-slider/2024-oct/2024-10-14-Launch-Banner-desktop-home-pa_v3.jpg"},
    {id:'3$21fd',src:"https://shop.samsung.com/latin/pub/media/main-slider/2024-nov/2024-11-1Samsung-Days_Multi-Banner-home-desktop_pa.jpg"},
    {id:'2&311d',src:"https://shop.samsung.com/latin/pub/media/main-slider/2024-sep/2024-09-02-EstaEsLaTele-Banner-Desktop.jpg"},
 ]

function Carousel(){
    return(
        <div className="carousel">
            <div className="carousel-wrapper">
               {
                items.map(item=>
                    <div className="carousel-slide" key={item.id} >
                        <img className="slide-img" src={item.src}  alt="banner2" />

                    </div>
                )
               }
            </div>
        </div>
    )
}

export default Carousel;