

import {render} from 'react-dom'; // Importando uma função chamada render,do react-dom

import { App } from './App' //Não é preciso colocar a  extensão do arquivo pois o webpack,ja faz isso

render(<App  />, document.getElementById('root'))

//O render será responsavel por renderizar o retorno da função app na div com id "root" dentro do nosso 
//HTML

