class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){return "Infantil"}
        else if(this.idade >= 12 && this.idade <= 13){return "Juvenil"}
        else if(this.idade >= 14 && this.idade <= 15){return "Intermediário"}
        else if(this.idade >= 16 && this.idade <= 30){return "Adulto"}
        else{return "Sem categoria"}
    }
    //Fórmula: imc = peso / (altura x altura)
    calculaIMC(){
        return this.peso/ Math.pow(this.altura, 2);
    }

    validaNotas(){
        var notas = this.notas;
        notas.sort(function(a, b) {
            return a - b;
        });
        notas.pop();
        notas.shift();
        return notas;
    }
    
    somarNotas(){
        return this.notas.reduce((total, nota)=>{
            return total + nota;
        },0)
    }

    calculaMediaValida(){     
        var notasValidas = (this.validaNotas());
        return this.somarNotas()/notasValidas.length;
    }

    obtemNomeAtleta(){
        return this.nome;
    }

    obtemIdadeAtleta(){
        return this.idade;
    }

    obtemPesoAtleta(){
        return this.peso;
    }

    obtemAlturaAtleta(){
        return this.altura;
    }

    obtemNotasAtleta(){
        return this.notas.join(", ");
    }

    obtemCategoria(){
        return this.calculaCategoria();
    }

    obtemIMC(){
        return this.calculaIMC();
    }

    obtemMediaValida(){
        return this.calculaMediaValida();
    }

    mostrarDados(){
        return ` 
            Nome: ${this.obtemNomeAtleta()}
            Idade: ${this.obtemIdadeAtleta()}
            Peso: ${this.obtemPesoAtleta()}
            Altura: ${this.obtemAlturaAtleta()}
            Notas: ${this.obtemNotasAtleta()}
            Categoria: ${this.obtemCategoria()}
            IMC: ${this.obtemIMC().toFixed(2)}
            Média válida: ${this.obtemMediaValida().toFixed(2)}
        `;
    }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log( atleta.mostrarDados());