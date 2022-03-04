const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const medias = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, medias]

// console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)

const exibeNomeNota = nomeDoAluno

console.log(exibeNomeNota('Julian'))


function nomeDoAluno(nome){
        if(listaDeNotasEAlunos[0].includes(nome)){

            let indice = listaDeNotasEAlunos[0].indexOf(nome)
            
            return `${listaDeNotasEAlunos[0][indice]}, sua media é ${listaDeNotasEAlunos[1][indice]}`
        
        }else{
            return `Aluno não está cadastrado!`
        }
}