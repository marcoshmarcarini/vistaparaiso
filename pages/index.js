//Área de Importações
import Cabecalho from "../components/Cabecalho"
import Conteudo from "../components/Corpo"
import Rodape from "../components/Rodape"


//Conteudo da Home
function PaginaInicial(){
    return(
        <>
            <div>
                <Cabecalho />
                <Conteudo />
                <Rodape />
            </div>
        </>
    )
}

export default PaginaInicial