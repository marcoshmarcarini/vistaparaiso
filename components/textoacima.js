import  Image  from 'next/image'


function TextoParteUm(){
    return(
        <>
            <div className="container area-text-imagem">
                <div className="texto-um">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Proin ac justo et dui mollis lacinia ultrices sed quam. 
                        Vestibulum in condimentum ex, ut euismod massa. Suspendisse potenti. 
                        Vestibulum sed felis placerat, dignissim est at, convallis leo. 
                        Sed sed nisl justo. Vestibulum interdum erat ut nisi maximus lobortis. 
                        Suspendisse commodo diam non nisl maximus volutpat.
                    </p>
                    <p>
                        Orci varius natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Mauris consectetur, enim a posuere semper, 
                        nulla urna sagittis tortor, vel efficitur lorem erat sed libero. 
                        Donec imperdiet enim vitae congue dictum. Vivamus id dapibus lectus, 
                        vel fermentum elit.
                    </p>
                </div>
                <div className="img-texto-um">
                    <Image src="/images/homem-em-casa.png" width={1200} height={600} className="imagem-01" />
                </div>
            </div>
        </>
    )
}

export default TextoParteUm