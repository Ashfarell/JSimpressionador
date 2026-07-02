function recursividade(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * recursividade(n - 1);
  }
}
console.log(recursividade(5));
