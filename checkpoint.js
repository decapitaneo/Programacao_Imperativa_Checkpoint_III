/* Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). */

function Aluno(nome, quantidadeFaltas, notas) {
  this.nome = nome
  this.quantidadeFaltas = quantidadeFaltas
  this.notas = notas
  this.calculaMedia = function () {
    let soma = 0
    for (let i = 0; i < this.notas.length; i++) {
      soma = soma + this.notas[i]
    }
    const media = soma / this.notas.length
    return media
  }
  this.faltas = function () {
    this.quantidadeFaltas += 1
    return this.quantidadeFaltas
  }
}

let AnaCarolina = new Aluno('Ana Carolina', 10, [5, 7, 8, 9])

let AnaPaula = new Aluno('Ana Paula', 2, [8, 9, 10, 9.9])

let AnaCatarina = new Aluno('Ana Catarina', 0, [10, 9.8, 10, 9.9])

let AnaJulia = new Aluno('Ana Julia', 0, [3, 5, 7, 6])

let AnaBeatriz = new Aluno('Ana Beatriz', 8, [8, 9, 8.8, 9.3])

console.log(AnaCarolina.calculaMedia())
console.log(AnaBeatriz.faltas())

let listaAlunos = [AnaCarolina, AnaPaula, AnaCatarina, AnaJulia, AnaBeatriz]

let curso = {
  nomeDoCurso: '',
  notaDeAprovacao: 7,
  faltasMaximas: 5,
  listaAlunos: listaAlunos,
  cadastrarAluno(nome, quantidadeFaltas, notas) {
    let aluno = new Aluno(nome, quantidadeFaltas, notas)
    this.listaAlunos.push(aluno)
  },
  // percorrendo a lista
  consultarAluno(nome) {
    for (let i = 0; i < this.listaAlunos.length; i++) {
      const aluno = this.listaAlunos[i]
      if (aluno.nome === nome) {
        console.log('Aluno encontrado ' + aluno.nome)
        return aluno
      }
    }
    console.log('Aluno nao encontrado')
  },
  situacaoFinal(nome) {
    let aluno = this.consultarAluno(nome)
    let media = aluno.calculaMedia()
    let situacaoFinalAluno = false
    if (
      media >= this.notaDeAprovacao &&
      aluno.quantidadeFaltas < this.faltasMaximas
    ) {
      console.log(`${aluno.nome} possui a media = ${media}. Aluno Aprovado!`)
      situacaoFinalAluno = true
    } else if (
      aluno.quantidadeFaltas === this.faltasMaximas &&
      media > this.notaDeAprovacao * 1.1
    ) {
      console.log(
        `${aluno.nome} esta com a media = ${media}. Numero de faltas = ${
          aluno.quantidadeFaltas
        }. Aluno Aprovado! Apesar de ter atingido o número máximo de faltas de ${
          this.faltasMaximas
        } sua nota foi ${media / this.notaDeAprovacao}% acima da média que é ${
          this.notaDeAprovacao
        }!`
      )
      situacaoFinalAluno = true
    } else {
      console.log(
        `${aluno.nome} possui media = ${media} e numero de faltas = ${aluno.quantidadeFaltas}. Aluno Reprovado`
      )
    }
    return situacaoFinalAluno
  },
  listaAlunosAprovados() {
    const listaAprovados = []
    for (let i = 0; i < this.listaAlunos.length; i++) {
      const aluno = this.listaAlunos[i]
      const situacaoAluno = this.situacaoFinal(aluno.nome)
      listaAprovados.push(situacaoAluno)
    }
    return listaAprovados
  }
}

curso.cadastrarAluno('Ana Guilhermina', 5, [7.7, 7.7, 7.6, 7.6])
curso.cadastrarAluno('Ana Botelha', 5, [7.7, 7.7, 7.8, 7.7])

// console.log(curso.listaAlunos)
// curso.consultarAluno('Ana Julia')
// curso.situacaoFinal('Ana Carolina')
console.log(curso.situacaoFinal('Ana Guilhermina'))
console.log(curso.situacaoFinal('Ana Botelha'))
console.log(curso.situacaoFinal('Ana Beatriz'))
console.log(curso.listaAlunosAprovados())
