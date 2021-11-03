//Área de Importações
import Cabecalho from "../components/Cabecalho"
import Conteudo from "../components/Corpo"


//Conteudo da Home
function PaginaInicial(){
    return(
        <>
            <div>
                <Cabecalho />
                <Conteudo />
            </div>
        </>
    )
}

export default PaginaInicial