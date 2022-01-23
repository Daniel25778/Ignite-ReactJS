// const repositoryName = 'UNFORM-EDIT';


import { RepositoryItem } from "./RepositoryItem";


//Constante criada para ser renderizada dentro de cada componente RepositoryItem
const repository = {
    name: 'unform',
    description: 'Form in React',
    link: 'http://github.com/unform/unform',
}


export function RepositoryList(){
    return(
        <section className="repository-List" >
        
        <h1>Lista de repositórios</h1>

        <ul>
        {/* Chamamos o componente RepositoryItem para renderizar(exibir) em tela o código HTML que ele retorna evitando assim a repetição de codigo HTML dentro desta mesma FUNÇÃO     */}
            {/* Depois de chamar-mos o componente passamos o argumento que será armazenado no "props(nome dado como parametro da função RepositoryItem)" */}
            <RepositoryItem repository={repository}></RepositoryItem> 
            <RepositoryItem repository={repository}></RepositoryItem> 
            <RepositoryItem repository={repository}></RepositoryItem> 
            <RepositoryItem repository={repository}></RepositoryItem> 
        </ul>
        
    
        </section>
    );
}