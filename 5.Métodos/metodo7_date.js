console.log(Date); // ==>[Function: Date]    N/ é data ==>apenas mostra classe/função DATE em si
//Significa: “Date é uma função especial do JavaScript (uma classe construtora)”

//Date = Receita
//New Date() = bolo pronto

new Date(); //Cria DATA (objeto)
console.log(new Date()); //Retorna data ==>2026-06-04T19:57:25.558Z

const dataAtual = new Date(); //VAR p/ armazenar valor da data   //Permite utilizar get...
console.log(dataAtual);

//Com a CONST criada fica mais fácil reutilizar a data
console.log('dia do mês: ' + dataAtual.getDate());
console.log('ano: ' + dataAtual.getFullYear());
console.log('Mês: ' + dataAtual.getMonth());

console.log('dia da semana: ' + dataAtual.getDay());

console.log('hora desde 1970: ' + dataAtual.getTime()); //Retorna Nº gigante   ⇒1780600788289  //tempo contado assim: milissegundos desde 01/01/1970
console.log(new Date(1780604079091)); //Reutilizando o Número gerado p/ transformar em data

//VAR - Timestamp
const timestamp = dataAtual.getTime(); //VAR timestamp p/ gerar Nº legível

console.log(new Date(timestamp)); //Usando CONST timedate

console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());

const hoje = new Date();
const timestamp2 = hoje.getTime(); //transforma data em Nº

console.log(hoje);
console.log(timestamp2);
console.log(new Date(timestamp2)); //transforma Nº em data
