

const pessoas = [
    {
        nome: 'Joaquim',
        anoNascimento: 2019
    },
    {
        nome: 'Maria',
        anoNascimento: 2006
    }
];
const pessoasComIdades = 
    pessoas.map((pessoa) => {return {nome: pessoa.nome, anoNascimento: pessoa.anoNascimento, idade: 2023 - pessoa.anoNascimento}});

        
        // console.log(pessoa);
        // return pessoa;

        // return {
        //     name: pessoa.nome,
        //     year: pessoa.anoNascimento,
        //     age: 2023 - pessoa.anoNascimento
        // }

console.log(pessoas);
console.log(pessoasComIdades);

