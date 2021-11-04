import Carrossel from "./carrossel"
import TextoParteUm from "./textoacima"
import Formulario from "./formulario"
import TextoParteDois from "./textoabaixo"
import Vantagens from "./vantagens"
import VantagensMobile from "./vantagens-mobile"


function Conteudo(){
    return (
        <>
            <div>
                <Carrossel />
                <TextoParteUm />
                <TextoParteDois />
                <Vantagens />
                <VantagensMobile/>
                <Formulario />
            </div>
        </>
    )
}

export default Conteudo