import { useState } from "react";
import { Carousel, CarouselItem} from "react-bootstrap";
import Image from 'next/image'

function SegundoCarrossel(){
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <>
            <div className="area-carrossel-2 container">
                <Carousel activeIndex={index} onSelect={handleSelect} className="carrossel-2">
                    <Carousel.Item>
                        <Image src="/images/carousel2/carrossel2-1.png" width={1280} height={720} className="d-block w-100" alt="Primeiro Slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/images/carousel2/carrossel2-2.png" width={1280} height={720} className="d-block w-100" alt="Segundo Slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/images/carousel2/carrossel2-3.png" width={1280} height={720} className="d-block w-100" alt="Terceiro Slide"/> 
                    </Carousel.Item>
                </Carousel> 
            </div>
        </>
    )
}

export default SegundoCarrossel


