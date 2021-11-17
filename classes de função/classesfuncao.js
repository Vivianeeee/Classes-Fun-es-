// Classe
class Carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano= ano;

    }
}

// Instanciando Objetos a classe
  let meuCarro1 = new Carro('Ford', 2018);
  let meuCarro2= new Carro('Corsa' , 2003);

  //imprimindo as informações
  console.log(meuCarro1);
  console.log(meuCarro1.nome);
  console.log(meuCarro1.ano);

  console.log(" ");

  console.log(meuCarro2);
  console.log(meuCarro2.nome);
  console.log(meuCarro2.ano);


// Nova classe com mais de um metodo

  class novoCarro {
       constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;

    }
  
       idadeCarro(ano){
        return ano - this.ano;
    }
}
  
// Buscando a Data atual
let Datahoje = new Date();

let ano = Datahoje.getFullYear()
    
// Instanciando o objeto novoCarro
let meuNovoCarro = new novoCarro('Carro', 2003);

console.log(meuNovoCarro.idadeCarro(ano));

console.clear()


// Criando nova Classe
class ClassePessoa{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

    }
    getBirthYear(){

        return this.dob.getFullYear();
        
    }

    // gitFullName(){
    //return   `${this.firstName} ${this.lastName}`;   

    // }

  //Outra Forma de criar um metodo(com this ou nome de variavel) 
   // const gitFullName = () => {
    // return   `${this.firstName} ${this.lastName}`;
    // };

}


// Instanciar um objeto Pessoa
let pessoa1 = new ClassePessoa('Irmão do','Jorel','2007-05-08');
let pessoa2 = new ClassePessoa('Pipoca','Animada','1970-06-07');

console.log(pessoa1);
console.log(pessoa1.dob.getFullYear());
console.log(pessoa1.getBirthYear());
console.log(pessoa1.gitFullName());

  