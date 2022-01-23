const path = require('path') 

const HtmlWebpackPlugin = require('html-webpack-plugin') // IMPORTANDO O PLUGIN DE WEBPACK
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production' // VERIFICAR SE O AMBIENTE DA APLICAÇÃO É DE DESENVOLVIMENTO

module.exports = {
    mode: isDevelopment ? 'development' : 'production', //Modo de execução do webpack definido como "Desenvolvimento",caso isDevelopment for true
    devtool:  isDevelopment ? 'eval-source-map': 'source-map', 
    entry: path.resolve(__dirname, 'src', 'index.tsx' ), //INDICAR QUAL O ARQUIVO INICIAL DA APLICAÇÃO
    output: {  //ARQUIVO QUE IREMOS GERAR A PARTIR DO WEBPACK
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions:['.js', '.jsx', '.ts', '.tsx'],  // POR PADRÃO O WEBPACK LERÁ ARQUIVOS "JS",MAS NESSE CASO UTILIZAMOS "JSX",PORTANTO DEVEMOS REFERENCIA-LO TAMBÉM
    },
    devServer:{
           static: path.resolve(__dirname, 'public'), //Referenciando onde esta o HTML da aplicação      
           hot: true,
        },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),//Adicionando plugin de refresh caso estivermos em ambiente de desenvolvimento 
        new HtmlWebpackPlugin({
           template: path.resolve(__dirname, 'public', 'index.html') //Qual arquivo de template ele irá utilizar para gerar o nosso html
        })
    ].filter(Boolean),//Para entender valores retornados como false and true
    module:{ //Configurações de como a aplicação vai lidar com cada tipo de arquivo
        rules: [
            {
              test: /\.(j|t)sx$/, //Expressão regular para verificar se o arquivo recebido é JavaScript,ou não
              exclude: /node_modules/, //Excluir os arquivos ja convertidos pelo o node,pois isso é responsabilidade do webpack
              use: {
                 loader: 'babel-loader',
                 options:{
                  plugins:[
                    isDevelopment && require.resolve('react-refresh/babel')
                  ].filter(Boolean)
                 } 
              }// Age em conjunto com o webpack no momento de conversão
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