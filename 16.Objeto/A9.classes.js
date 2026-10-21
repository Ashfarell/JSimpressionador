class BankAccount {
  constructor(name, address, balance) {
    ((this.name = name), (this.address = address), (this.balance = balance));
  }
  printInfo() {
    console.log(`Essa é a conta do ${this.name}`);
  }
}

const user1 = new BankAccount('Jean', 'SP', 38);
user1.printInfo();

//
class pessoasEmpresa {
  constructor(nome, setor, idade) {
    ((this.nome = nome), (this.setor = setor), (this.idade = idade));
  }
  print() {
    console.log(`Funcionário ${this.nome} so setor ${this.setor}`);
  }
}

const func1 = new pessoasEmpresa('Jean', 'Rh', 38);
func1.print();
