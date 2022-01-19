const path = require('path') 

const HtmlWebpackPlugin = require('html-webpack-plugin') // IMPORTANDO O PLUGIN DE WEBPACK


const isDevelopment = process.env.NODE_ENV !== 'production' // VERIFICAR SE O AMBIENTE DA APLICAÇÃO É DE DESENVOLVIMENTO

module.exports = {
    mode: isDevelopment ? 'development' : 'production', //Modo de execução do webpack definido como "Desenvolvimento",caso isDevelopment for true
    devtool:  isDevelopment ? 'eval-source-map': 'source-map', 
    entry: path.resolve(__dirname, 'src', 'index.jsx' ), //INDICAR QUAL O ARQUIVO INICIAL DA APLICAÇÃO
    output: {  //ARQUIVO QUE IREMOS GERAR A PARTIR DO WEBPACK
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions:['.js', '.jsx'],  // POR PADRÃO O WEBPACK LERÁ ARQUIVOS "JS",MAS NESSE CASO UTILIZAMOS "JSX",PORTANTO DEVEMOS REFERENCIA-LO TAMBÉM
    },
    devServer:{
           static: path.resolve(__dirname, 'public'), //Referenciando onde esta o HTML da aplicação      
    },
    plugins: [
        new HtmlWebpackPlugin({
           template: path.resolve(__dirname, 'public', 'index.html') //Qual arquivo de template ele irá utilizar para gerar o nosso html
        })
    ],
    module:{ //Configurações de como a aplicação vai lidar com cada tipo de arquivo
        rules: [
            {
              test: /\.jsx$/, //Expressão regular para verificar se o arquivo recebido é JavaScript,ou não
              exclude: /node_modules/, //Excluir os arquivos ja convertidos pelo o node,pois isso é responsabilidade do webpack
              use: 'babel-loader'// Age em conjunto com o webpack no momento de conversão
            },
            {
                test: /\.css$/, //Expressão regular para verificar se o arquivo recebido é css,ou não
                exclude: /node_modules/, //Excluir os arquivos ja convertidos pelo o node,pois isso é responsabilidade do webpack
                use: ['style-loader', 'css-loader']// Age em conjunto com o webpack no momento de conversão
            },
            {
                test: /\.scss$/, //Expressão regular para verificar se o arquivo recebido é sass,ou não
                exclude: /node_modules/, //Excluir os arquivos ja convertidos pelo o node,pois isso é responsabilidade do webpack
                use: ['style-loader', 'css-loader', 'sass-loader']// Age em conjunto com o webpack no momento de conversão
            }
        ],
    }
}