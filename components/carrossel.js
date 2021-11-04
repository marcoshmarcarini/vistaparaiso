import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap"
import Image from 'next/image'

function Carrossel(){
    return (
        <>
            <div className="area-carrossel">
                <Carousel className="carrossel">
                    <Carousel.Item>
                        <Image src="/images/construcao01.png" width={1920} height={600} className="d-block w-100" alt="First slide" />
                            <Carousel.Caption>
                                <h3>Slide 1</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <Image src="/images/construcao02.png" width={1920} height={600} className="d-block w-100" alt="Second slide" />
                            <Carousel.Caption>
                                <h3>Slide 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image src="/images/construcao03.png" width={1920} height={600} className="d-block w-100" alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Slide 3</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </>
    )
}

export default Carrossel