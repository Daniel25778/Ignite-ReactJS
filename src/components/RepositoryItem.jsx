//SEMPRE UTILIZAMOS EXPORT ANTES DA FUNÇÃO PARA PODER IMPORTA-LA EM OUTRO LUGAR CASO QUISERMOS UTILIZA-LA DEPOIS
//props é o parametro exigido por essa função,quando ela é chamada


export function RepositoryItem(props){
    return( //SEMPRE QUE QUEREMOS RETORNAR MAIS DE UMA LINHA DE CóDIGO HTML COLOCAMOS PARENTESES EM VOLTA AO ABRIR O RETURN 
        <li>
            <strong>{props.repository.name}</strong> 
{/* //Caso o não passar-mos o argumento,utilizamos do "??" para indicar que se não tiver argumento escrever 'Default' */}
            {/* PARA COLOCAR UM CÓDIGO JS DENTRO DE UM HTML,ENVOLVE-LO COM CHAVES */}
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
    )
}
