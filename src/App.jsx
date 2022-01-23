// import { container } from 'webpack';
// import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';


//ESTE ARQUIVO APP É RESPONSAVEL POR EXECUTAR TODAS AS FUNÇÕES DA NOSSA APLICAÇÃO

export function App(){ //COMPONENTE

    // throw new Error('DEU ERRO, OTÁRIO'); 
    return (
             <RepositoryList/>
    )
}

//Versão onde testamos o Counter |
                            //   v

    // return (
    //     <>

    //     <RepositoryList/>
    //     <Counter/>
        
    //     </>
    //     ) 

    // }

    // Quando temos  dois componentes sendo chamados,é preciso envolve-los 
    // em um container,porém coloca-los simplesmente dentro de uma "div"
    // não é uma das melhores escolhas por conta dele não estar mais localizada na nossa 
    // "div" root,logo utilizamos uma tag que envolve os componentes porem não aparece
    // no nosso HTMl 