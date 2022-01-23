// const repositoryName = 'UNFORM-EDIT';

//https://api.github.com/users/Daniel25778/repos

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useState, useEffect } from "react";

//Constante criada quando o as informações eram estaticas para ser renderizada dentro de cada componente RepositoryItem
// const repository = {
//     name: 'unform',
//     description: 'Form in React',
//     link: 'http://github.com/unform/unform',
// }


interface Repository{
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([])//Sempre criar o valor inicial do useSate com o mesmo tipo da variavel que voce ira armazenar depois 
    
    

    useEffect(() => {
    fetch('https://api.github.com/users/Daniel25778/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
    },[])

    //bUSCANDO os repositorios do link.Quando recebermos essa resposta,convertemos ela
    //para JSON.Quando terminar a conversão teremos os dados do nosso repositorio e o armazenamos na nossa variavel de repositorios


    return(
        <section className="repository-List" >
        
        <h1>Lista de repositórios</h1>

        <ul>
        {/* Chamamos o componente RepositoryItem para renderizar(exibir) em tela o código HTML que ele retorna evitando assim a repetição de codigo HTML dentro desta mesma FUNÇÃO     */}
            {/* Depois de chamar-mos o componente passamos o argumento que será armazenado no "props(nome dado como parametro da função RepositoryItem)" */}
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository}></RepositoryItem>
            //Percorrendo cada um dos repositorios e para cada um deles retornamos um repositoryItem
            })}
        </ul>
        
    
        </section>
    );
}