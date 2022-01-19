// EXPORTANDO A CONFIGURAÇÃO DO BABEL //

module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic' //Configuração para não ser necessario importar o React em todos os arquivos
        }]
    ]
}